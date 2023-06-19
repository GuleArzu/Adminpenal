import {Typography} from 'antd';
import React from 'react'
import './foot.css'

function Footer() {
  return (
    <div className='Appfooter'>
      <Typography.Link  id="type" href='tel:+123456789'>+123456789</Typography.Link>
      <Typography.Link id="type" href='https://www.google.com/' target={"_blank"}>Privacy Term</Typography.Link>
      <Typography.Link id="type" href="https://www.google.com/" target={"_blank"}>Terms of use</Typography.Link>
   
    </div>
  )
}
export default  Footer;