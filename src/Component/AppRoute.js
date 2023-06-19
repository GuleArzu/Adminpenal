import React from 'react'
import { Route, Routes } from "react-router-dom"
import Dashboard from '../Pages/Dashboard'
import Orders from '../Pages/Orders'
import Customer from '../Pages/Customer'
import Inventory from '../Pages/Inventory'

function AppRoute() {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Order" element={<Orders />} />
            <Route path="/Customer" element={<Customer />} />
        </Routes>
    )
}
export default AppRoute