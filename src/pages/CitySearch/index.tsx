import React, { FC, useEffect, useState } from "react";
import { Input, Space, List, message } from "antd";
import { Link, useSearchParams } from "react-router-dom";

import getCities from "./api/getCities";

const { Search } = Input;

const CitySearch: FC = () => {
  const [cityList, setCityList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearch = (namePrefix: string) => {
    setLoading(true);
    setSearchParams({ namePrefix });
    getCities(namePrefix)
      .then((cities) => setCityList(cities))
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: err,
        });
        setCityList([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const namePrefix = searchParams.get("namePrefix");
    if (namePrefix) {
      onSearch(namePrefix);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <Space direction="vertical">
        <Search
          placeholder="Input a city name prefix"
          onSearch={onSearch}
          style={{ width: 200 }}
          defaultValue={searchParams.get("namePrefix") ?? ""}
        />
        <List
          size="small"
          loading={loading}
          header={<div>List of cities:</div>}
          bordered
          dataSource={cityList}
          renderItem={(item) => (
            <List.Item>
              <Link to={item}>{item}</Link>
            </List.Item>
          )}
        />
      </Space>
    </>
  );
};

export default CitySearch;
