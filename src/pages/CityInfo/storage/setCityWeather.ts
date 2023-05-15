import type { ReturnResponse as WeatherInfo } from "../api/getWeather";

export default function setCity(
  cityName: string,
  weatherInfo: WeatherInfo
): void {
  localStorage.setItem(cityName, JSON.stringify(weatherInfo));
}
