import React from "react";
import TodayWeatherCard from "./components/TodayWeatherCard";
import WeekCard from "./components/WeekCard";
import RandomText from "./components/RandomText";
import { Stack } from "@mui/material";

const Main = () => {
  return (
    <Stack
      height={"100vh"}
      width={"100%"}
      padding={"45px"}
      direction={{ sm: "column", md: "row" }}
      spacing={10}
      className="flex flex-row items-center justify-center"
    >
      <TodayWeatherCard />
      <Stack width={"45%"} spacing={3}>
        <WeekCard />
        <RandomText />
      </Stack>
    </Stack>
  );
};

export default Main;
