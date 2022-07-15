import { HomeOutlined, PlusSquareOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '1', <HomeOutlined/>),
  getItem('Add Task', '2', <PlusSquareOutlined/>),
  getItem('Edit Task', '3', <EditOutlined/>),
  getItem('Recycle Bin', '4', <DeleteOutlined/>),
];

function itemOnClick({item, key, keyPath, domEvent}){
  if(key === '1'){
    window.location = '/';
  }
  if(key === '2'){
    window.location = '/add';
  }
  if(key === '3'){
    window.location = '/edit';
  }
  if(key === '4'){
    window.location = '/bin';
  }
}

const SideNavbar = () => {
  const location = useLocation();
  const [activeKey, ] = useState(location.pathname === '/' ? ['1'] : 
    (location.pathname === '/add' ? ['2'] : 
      (location.pathname === '/edit' ? ['3'] : ['4'])
    )
  );
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{height: '8vh', textAlign: 'center' }}>
        <h1 style = {{color: '#fff', padding: '4px 0 0 0'}}>{collapsed ? 'Todo' : 'Todo WebApp'}</h1>
        <h1 style = {{color: '#fff'}}>{collapsed ? 'WebApp' : 'RD 27'}</h1>
      </div>
      <Menu theme="dark" selectedKeys={activeKey} mode="inline" items={items} onClick= {itemOnClick}/>
    </Sider>
  );
};

export default SideNavbar;