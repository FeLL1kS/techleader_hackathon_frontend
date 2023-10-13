import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Table, { DataType } from "./Table";
import Navbar from "./Navbar";
import TopList from "./TopList";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "main",
    label: <Link to="/">Главная</Link>,
  },
  {
    key: "main",
    label: <Link to="/TopList">Таблица лидеров</Link>,
  },
];

const tableData: DataType[] = [
  {
    id: 1,
    username: "xcv",
    text: "cvxcvxvc",
    fileLink: "sdfsdf.ru",
    rating: 4,
    fileId: "12313",
    isApproved: false,
    date: "1697239396380",
  },
  {
    id: 2,
    username: "xcv",
    text: "cvxcvxvc",
    fileLink: "sdfsdf.ru",
    rating: 3,
    fileId: "12313",
    isApproved: true,
    date: "1697239396380",
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [search, setSearch] = useState("");
  const [data, setData] = useState(tableData);

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Routes>
          <Route
            path="/"
            element={
              <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                <Navbar
                  search={search}
                  setSearch={setSearch}
                  data={tableData}
                  setData={setData}
                ></Navbar>
                <Table data={data}></Table>
              </Content>
            }
          />
          <Route path="/TopList" element={<TopList />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;
