import React, { FC } from "react";
import { useParams } from "react-router-dom";

const CityInfo: FC = () => {
  const { cityName } = useParams();
  return <div>{cityName}</div>;
};

export default CityInfo;
