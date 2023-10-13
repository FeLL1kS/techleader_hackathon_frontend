import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { Rate } from "antd";

const { Column } = Table;

export interface DataType {
  id: number;
  username: string;
  text: string;
  fileLink: string;
  rating: number;
  fileId: string;
  isApproved: boolean;
  date: string;
}

interface ITableProps {
  data: DataType[];
}

const App: React.FC<ITableProps> = ({ data }: ITableProps) => (
  <Table dataSource={data}>
    <Column title="Name" dataIndex="username" key="username" />
    <Column title="Date" dataIndex="date" key="date" />
    <Column title="Text" dataIndex="text" key="text" />
    <Column title="Id" dataIndex="fileId" key="id" />
    <Column title="Boolean" dataIndex="isApproved" key="isApproved" />
    <Column title="FileLink" dataIndex="fileLink" key="fileLink" />

    <Column
      title="Marks"
      dataIndex="marks"
      key="marks"
      render={(_: any, record: DataType) => <Rate value={record.rating} />}
    />
    <Column
      title="Action"
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <Button>Accept</Button>
          <Button>Delete</Button>
        </Space>
      )}
    />
  </Table>
);

export default App;
