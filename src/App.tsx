import { Routes , Route, Link} from 'react-router-dom';
import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Table from "./Table";
import Navbar from "./Navbar"
import TopList  from "./TopList"



const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'main',
    label: (
      <Link to='/'>Главная</Link>
    )
  },  
  {
    key: 'main',
    label: (
      <Link to='/TopList'>Рейтинг</Link>
    )
  }
]

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Routes>
          <Route path='/' element = {
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <Navbar></Navbar>
              <Table></Table>
            </Content>
          }/>
          <Route path='/TopList' element = {<TopList/>}/>
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;