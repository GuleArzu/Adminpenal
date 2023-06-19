import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell} from '@fortawesome/free-solid-svg-icons'
import logo from './logo.svg';

import { Badge, Typography } from 'antd';


function Header(){
  return(
<div className='app'>
      <img className='imge' width={60} src={logo} alt='' />
  
     <div className='font'>
      <Badge count={5} dot>
      <FontAwesomeIcon id="icn" icon={faEnvelope} style={{fontSize:25, color:'white'}} />
      </Badge>
      <Badge count={15}>
      <FontAwesomeIcon icon={faBell} style={{fontSize:25, color:'white'}} />
      </Badge>
      </div>
      <Typography.Title id='name'> XELORO</Typography.Title >
    </div>
  );
}
export default Header;



