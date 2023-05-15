import axios from "axios";

const options = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "23b543aa2dmsh625b51c6cff47d8p18ff6djsn23c0c217e4d3",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

async function getCities(namePrefix: string): Promise<string[]> {
  const response = await axios.request({
    ...options,
    params: { namePrefix },
  });
  const cities = response.data.data as { city: string }[];
  return cities.map((_) => _.city);
}

export default getCities;
