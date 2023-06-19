import { Space, Typography,Table,Avatar } from 'antd'

import React, { useEffect, useState } from 'react'
function Inventory() {
  const [dataSource, setDatasource] = useState([])
  const [loading, setLoading] = useState(false)
useEffect(() => {
    setLoading(true)
    getProducts().then(res => {
    setDatasource(res.products);
  setLoading(false)
    });
}, []);
  return (
    <div>
      <Space size={20} direction='vertical'>
      <Typography.Text level={4}>Inventory</Typography.Text>
      <Table columns={
                [
                  {
                    title: "Thumbnail",
                    dataIndex: "thumbnail",
                    render:(link)=>{
                      return <Avatar src={link}/>
                    },
                },
                {
                    title: "Title",
                    dataIndex: "title"
                },
                {
                  title: "Price",
                  dataIndex: "price",
                  render:(value)=><span>${value}</span>
              },
              {
                title: "Rating",
                dataIndex: "rating",
            },
            {
              title: "Stock",
              dataIndex: "stock"
          },
                {
                  title: "Brand",
                  dataIndex: "brand"
              },
              {
                title: "Category",
                dataIndex: "category"
            },
           
                ]}
                loading={loading}
                dataSource={dataSource}
                pagination={false}
            >
              </Table>
      </Space>
  
    </div>
  )
}

export default Inventory


export const getProducts = () => {
  return (
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
  )
}
