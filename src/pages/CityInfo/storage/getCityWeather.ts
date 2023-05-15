import type { ReturnResponse as WeatherInfo } from "../api/getWeather";

export default function getCity(cityName: string): WeatherInfo | null {
  const weatherInfo = localStorage.getItem(cityName);
  if (weatherInfo) {
    return JSON.parse(weatherInfo, (key, val) =>
      key === "date" ? new Date(val) : val
    );
  }
  return null;
}
