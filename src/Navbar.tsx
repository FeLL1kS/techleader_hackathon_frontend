import React from "react";
import { Input } from "antd";
import DatePicker from "./DatePicker";
import { DataType } from "./Table";

const { Search } = Input;

interface INavbarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const App: React.FC<INavbarProps> = ({
  search,
  setSearch,
  data,
  setData,
}: INavbarProps) => (
  <>
    <Search
      onChange={(e) => {
        setSearch(e.target.value);

        const filteredData = data.filter((d) =>
          d.firstName.includes(e.target.value)
        );

        setData(filteredData);
      }}
      placeholder="input search text"
      enterButton={"Search"}
      size="large"
      value={search}
    />
    <DatePicker></DatePicker>
  </>
);

export default App;
