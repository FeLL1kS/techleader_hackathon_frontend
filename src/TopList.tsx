import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  score: number;

}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'score',
    dataIndex: 'score',
    sorter: {
      compare: (a, b) => a.score - b.score,
      multiple: 3,
    },
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Олег',
    score: 999999,
  },
  {
    key: '2',
    name: 'Михаил',
    score: 999998,
  },
  {
    key: '3',
    name: 'Юра',
    score: -69,
  },
  {
    key: '4',
    name: 'Сергей',
    score: 0,
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default App;