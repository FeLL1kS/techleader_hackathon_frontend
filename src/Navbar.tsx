import React from 'react';
import { Button, Flex, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import DatePicker from "./DatePicker"


const { Search } = Input;





const App: React.FC = () => (
  <>
    <Search onClick={() => {}} placeholder="input search text" enterButton={"Search"}  size="large" />
    <DatePicker></DatePicker>
        

  </>
);

export default App;