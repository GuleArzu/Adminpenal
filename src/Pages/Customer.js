import { Space, Typography,Table } from 'antd'

import React, { useEffect, useState } from 'react'

function Customer() {

  const [dataSource, setDatasource] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getUser().then(res => {
      setDatasource(res.users);
      setLoading(false)
    });
  }, []);
  return (
    <div>
      <Space size={20} direction='vertical'>
        <Typography.Text>Customer</Typography.Text>
        <Table columns={
          [
            {
              title: "FirstName",
              dataIndex: "firstName"
            },
            {
              title: "Email",
              dataIndex: "email",
              render: (value) => <span>${value}</span>
            },
            {
              title: "Password",
              dataIndex: "password",
            },
            {
              title: "Age",
              dataIndex: "age"
            },
            {
              title: "Gender",
              dataIndex: "gender"
            },
            {
              title: "BirthdayDate",
              dataIndex: "birthDate"
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

export default Customer

export const getUser = () => {
  return (
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
  )
}
