import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { Rate } from "antd";

const { Column } = Table;

export interface DataType {
  key: React.Key;
  firstName: string;
  date: number;
  message: string;
  tags: string[];
}

interface ITableProps {
  data: DataType[];
}

const App: React.FC<ITableProps> = ({ data }: ITableProps) => (
  <Table dataSource={data}>
    <Column title="Name" dataIndex="firstName" key="firstName" />
    <Column title="Date" dataIndex="date" key="date" />
    <Column title="Message" dataIndex="message" key="message" />
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Marks"
      dataIndex="marks"
      key="marks"
      render={() => <Rate />}
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
