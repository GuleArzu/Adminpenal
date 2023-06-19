import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faShoppingBasket, faUser, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Card, Space, Statistic, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function Dashboard() {
    return (

        <div >
            <Space size={20} direction='vertical'></Space>
            <Typography.Text level={4} style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: 25 }}>Dashboard</Typography.Text>
            <div>
                <Space direction='horizontal'>
                    <DashboardCard title={"Orders"} value={3228} Icon={faCartShopping} />
                    <DashboardCard title={"Inventory"} value={100} icon1={faShoppingBasket} />
                    <DashboardCard title={"Customer"} value={100} icon2={faUser} />
                    <DashboardCard title={"Revenue"} value={1941} icon3={faDollar} />
                </Space>
            </div>

            <Space>
                <RecentOrder />
                < DashboardCharts />
            </Space>

        </div>
    )
}

function DashboardCard({ title, value, Icon, icon1, icon2, icon3 }) {
    return (
        <Card >
            <Space direction='horizontal'>
                <FontAwesomeIcon icon={Icon} style={{ color: "green", backgroundColor: "rgba(0,255,0,0.25", fontSize: 24, padding: 8, borderRadius: 20 }} />
                <FontAwesomeIcon icon={icon1} style={{ color: "blue", backgroundColor: "rgba(0,255,255,0.25", fontSize: 24, padding: 8, borderRadius: 20 }} />
                <FontAwesomeIcon icon={icon2} style={{ color: "purple", backgroundColor: "rgba(0,255,0,0.25", fontSize: 24, padding: 8, borderRadius: 20 }} />
                <FontAwesomeIcon icon={icon3} style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25", fontSize: 24, padding: 8, borderRadius: 20 }} />
                <Statistic title={title} value={value}></Statistic>
            </Space>
        </Card>
    )
}

function RecentOrder() {
    const [dataSource, setDatasource] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getOrders().then(res => {
            setDatasource(res.products.splice(0, 4));
            setLoading(false)
        });
    }, []);
    return (
        <>
            <Typography.Text style={{ fontWeight: "bold" }} >RecentOrder</Typography.Text>
            <Table columns={
                [{
                    title: "Title",
                    dataIndex: "title"
                },
                {
                    title: "Quantity",
                    dataIndex: "quantity"
                },
                {
                    title: "Price",
                    dataIndex: "price"
                }
                ]}
                loading={loading}
                dataSource={dataSource}
                pagination={false}
            >

            </Table>
        </>
    )
}

export const getOrders = () => {
    return (
        fetch('https://dummyjson.com/carts/1')
            .then(res => res.json())
    )
}
function DashboardCharts() {
    const [RevenueData, setRevenueData] = useState(
        {
            labels: [],
            datasets: []
        }
    )
    useEffect(() => {

        getRevenue().then((res) => {
            const labels = res.carts.map((cart) => {
                return `User-${cart.userId}`;
            });
            const data = res.carts.map((cart) => {
                return cart.discountedTotal;
            });
            const dataSource = {
                labels,
                datasets: [
                    {
                        labels: "Revenue",
                        data: data,
                        backgroundColor: "rgba(255,0,0,1)",
                    },
                ],
            };
            setRevenueData(dataSource)
        });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'Bottom',
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };
    return (
        <Card style={{ width: 500, height: 250 }}>
            <Bar options={options} data={RevenueData} />
        </Card>
    )
}

export const getRevenue = () => {
    return (
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())

    )
}
export default Dashboard;
