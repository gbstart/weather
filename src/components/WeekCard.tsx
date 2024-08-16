import { Stack, Typography } from "@mui/material";
import React from 'react';


const weatherData = [
    { time: "Now", temperature: "28°C" },
    { time: "2 AM", temperature: "25°C" },
    { time: "3 AM", temperature: "24°C" },
    { time: "4 AM", temperature: "23°C" },
    { time: "5 AM", temperature: "23°C" },
    { time: "6 AM", temperature: "22°C" },
    { time: "7 AM", temperature: "22°C" },
    { time: "8 AM", temperature: "23°C" },
    { time: "9 AM", temperature: "24°C" },
    { time: "10 AM", temperature: "25°C" },
  ];
  
const WeekCard = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 p-4 border rounded-lg shadow-lg backdrop-blur-md bg-yellow-500 bg-opacity-20">
      {weatherData.map((item, index)=>
          <>
            {index === 5 && (
              <div key={`divider-${index}`} className="col-span-full">
                
                <hr className="my-4" />
              </div>
            )}
            <div style={{padding: "15px"}}>
              <div className="flex flex-row items-center">
                <Typography color={"white"} fontWeight={600}>{item.time}</Typography>
              </div>
              <Stack direction={{sm:"column", md:"row"}}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9055/9055356.png"
                  alt="weather icon"
                  className="w-6 h-6 mr-2"
                />
                <Typography color={"white"} fontWeight={500}>{item.temperature}</Typography>
              </Stack>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeekCard;
