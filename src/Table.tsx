import { Space, Table, Tag } from 'antd';
import React from 'react';
import {Rate} from 'antd';



const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  date: number;
  message: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'Юрий',
    date: 9,
    message: 'New York No. 1 Lake Park',
    tags: ['дурачек', 'developer'],
  },
  {
    key: '2',
    firstName: 'Сергей',
    date: 3,
    message: 'London No. 1 Lake Park',
    tags: ['gray','gay'],
  },
  {
    key: '3',
    firstName: 'Олег',
    date: 20,
    message: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    firstName: 'Михаил',
    date: 8,
    message: 'Sidney No. 1 Lake Park',
    tags: ['69', '  123'],
  },
  {
    key: '5',
    firstName: 'Дима',
    date: 12,
    message: 'Sidney No. 1 Lake Park',
    tags: ['D', 'mice'],
  },

];

const App: React.FC = () => ( 
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
          {tags.map(tag => (
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
      render={() => <Rate/>}
    />
    <Column
      title="Action"
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Accept</a>
          <a>Delete</a> 
        </Space>
      )}
    />
  </Table>
  
);

export default App;