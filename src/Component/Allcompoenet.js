import Header from './Header';
import Footer from './Footer';
import PageContent from './PageContent'
import Sidebar from './Sidebar';

import'../App.css'
import { Space } from 'antd';

function Allcompoenent() {
  return (
    <div className="App">
     <Header/>
     <Space className='SidePage'>
      <Sidebar/>
      <PageContent/>
     </Space>
     <Footer/> 
    </div>
  );
}

export default Allcompoenent;
