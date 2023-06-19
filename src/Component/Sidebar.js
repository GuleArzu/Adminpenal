import { Menu } from 'antd';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faTable, faChartBar, faFileAlt, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom"
function Sidebar() {
    const navigate=useNavigate();
    return (
        <div className='sidemenu'>
            <Menu onClick={(item) => {
                navigate(item.key)
            }}>
                <Menu.Item  key="/dashboard" >
                    <FontAwesomeIcon id="icon" icon={faDashboard} />
                    Dashboard
                </Menu.Item>
                <Menu.Item  key="/Order">
                    <FontAwesomeIcon id="icon" icon={faShoppingCart} />
                    Order
                </Menu.Item>
                <Menu.Item  key="/Inventory">
                    <FontAwesomeIcon id="icon"  icon={faTable} />
                    Inventory
                </Menu.Item>
                <Menu.Item  key="/charts">
                    <FontAwesomeIcon id="icon"  icon={faChartBar} />
                    Charts
                </Menu.Item>
                <Menu.Item  key="/forms">
                    <FontAwesomeIcon id="icon" icon={faFileAlt} />
                    Forms
                </Menu.Item>
                <Menu.Item   key="/Customer">
                    <FontAwesomeIcon id="icon" icon={faUser} />
                    Customer
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Sidebar;
