import React, { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Space, Button, message, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import getCityCoords from "./api/getCityCoords";
import getWeather from "./api/getWeather";
import type { ReturnResponse as WeatherInfo } from "./api/getWeather";

const CityInfo: FC = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherInfo>();
  useEffect(() => {
    if (!cityName) {
      navigate("404");
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        const { lat, lon } = await getCityCoords(cityName);
        const weatherData = await getWeather(lon, lat);
        setWeather(weatherData);
        setLoading(false);
      } catch (err) {
        message.error((err as Error).toString());
      }
    };

    fetchData();
  }, []);

  return (
    <Space direction="vertical">
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate("/")}
      >
        Search
      </Button>
      {cityName}
      {loading && <Spin />}
      {weather && weather[0].temp}
    </Space>
  );
};

export default CityInfo;
