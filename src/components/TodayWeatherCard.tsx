import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

type City = {
  name: string;
  sunset: string;
};
type WeatherData = {
  city: City;
};
const TodayWeatherCard = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    city: {
      name: "",
      sunset: "",
    },
  });
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fee0fde3defb80cdd6a57e8f9ac16c66&units=metric"
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);
  return (
    <Stack className="bg-yellow-100 w-[500px] rounded-2xl	">
      <Stack
        alignItems={"center"}
        className="items-flex-start justify-center"
        padding={"45px"}
        spacing={2}
      >
        <Typography fontSize={"20px"} color={"orange"} fontWeight={600}>
          Today
        </Typography>
        <Stack
          direction={"row"}
          className="flex flex-row items-center justify-center"
        >
          <img
            src={"https://cdn-icons-png.flaticon.com/512/9055/9055356.png"}
            className="w-[110px]"
          ></img>
          <Typography fontSize={"40px"} color={"orange"} fontWeight={600}>
            32°{" "}
          </Typography>
        </Stack>
        <Typography fontSize={"20px"} color={"orange"} fontWeight={600}>
          Sunny
        </Typography>
        <Typography fontSize={"20px"} color={"orange"} fontWeight={600}>
          {weatherData?.city.name}
        </Typography>
        <Typography fontSize={"20px"} color={"orange"} fontWeight={600}>
          15-08-2024
        </Typography>
        <Typography fontSize={"20px"} color={"orange"} fontWeight={600}>
          Feels like 30 | {weatherData?.city.sunset}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TodayWeatherCard;
