import { Space, Typography, Table } from 'antd'

import React, { useEffect, useState } from 'react'
function Orders() {
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
        <Typography.Text level={4}>Orders</Typography.Text>
        <Table columns={
          [

            {
              title: "Title",
              dataIndex: "title"
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>
            },
            {
              title: "DiscountedPrice",
              dataIndex: "ddiscountedPrice",
              render: (value) => <span>${value}</span>
            },
            {
              title: "Rating",
              dataIndex: "rating",
            },
            {
              title: "Stock",
              dataIndex: "stock"
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




export const getProducts = () => {
  return (
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
  )
}

export default Orders
