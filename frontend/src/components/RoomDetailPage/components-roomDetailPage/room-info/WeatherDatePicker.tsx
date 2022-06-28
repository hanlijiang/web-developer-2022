import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useState } from "react";
import WeatherBox from "./WeatherBox";
import React from 'react';
export default function WeatherDatePicker() {
    const [value, setValue] = useState<Date | null>(new Date());

    function getdate() {
      const date = new Date();
      date.setDate(date.getDate() + 90);
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
   
    
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker<Date>
          orientation="landscape"
          disablePast
          value={value}
          maxDate={getdate()}
          onChange={(newValue) => {setValue(newValue)}}
          renderInput={(params) => <TextField {...params} />}
          toolbarTitle="Day Weather"
          ToolbarComponent={(params) => (
            <WeatherBox dateValue={value}/>
  )}
        />
      </LocalizationProvider>
  )
}
