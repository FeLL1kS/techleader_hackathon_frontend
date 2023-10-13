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
    key: "1",
    firstName: "Юрий",
    date: 9,
    message: "New York No. 1 Lake Park",
    tags: ["дурачек", "developer"],
  },
  {
    key: "2",
    firstName: "Сергей",
    date: 3,
    message: "London No. 1 Lake Park",
    tags: ["gray", "gay"],
  },
  {
    key: "3",
    firstName: "Олег",
    date: 20,
    message: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    firstName: "Михаил",
    date: 8,
    message: "Sidney No. 1 Lake Park",
    tags: ["69", "  123"],
  },
  {
    key: "5",
    firstName: "Дима",
    date: 12,
    message: "Sidney No. 1 Lake Park",
    tags: ["D", "mice"],
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
