import axios from "axios";

const config = {
  method: "get",
  url: "http://api.openweathermap.org/data/2.5/forecast",
  params: {
    appid: "a6402677803e0a773227d17f05a24e87",
    units: "metric",
  },
};

export type ReturnResponse = {
  description: string;
  icon: string;
  temp: number;
  date: Date;
}[];

async function getWeather(lon: number, lat: number): Promise<ReturnResponse> {
  const response = await axios.request({
    ...config,
    params: { ...config.params, lat, lon },
  });
  const data = response.data.list as {
    main: { temp: number };
    weather: [{ description: string; icon: string }];
    dt_txt: string;
  }[];

  return data.map((_) => ({
    date: new Date(_.dt_txt),
    description: _.weather[0].description,
    icon: _.weather[0].icon,
    temp: _.main.temp,
  }));
}

export default getWeather;
