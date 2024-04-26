import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "46a5375ec3852b07693f97a5efd97414";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      appid: API_KEY,
    },
  });

  return data;
};
