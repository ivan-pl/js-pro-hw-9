import axios from "axios";

const config = {
  method: "get",
  url: "http://api.openweathermap.org/geo/1.0/direct",
  params: {
    appid: "a6402677803e0a773227d17f05a24e87",
    limit: 1,
  },
};

async function getCityCoords(
  cityName: string
): Promise<{ lat: number; lon: number }> {
  const response = await axios.request({
    ...config,
    params: { ...config.params, q: cityName },
  });
  const data = response.data[0] as {
    lat: number;
    lon: number;
    name: string;
    country: string;
  };

  return { lat: data.lat, lon: data.lon };
}

export default getCityCoords;
