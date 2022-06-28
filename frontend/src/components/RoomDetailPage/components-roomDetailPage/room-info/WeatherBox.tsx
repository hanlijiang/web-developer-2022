import React, { useEffect, useState } from "react";
import './WeatherBox.css';
interface WeatherBoxProps {
  dateValue: Date | null;
}
export default function WeatherBox(props: WeatherBoxProps) {
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("10d");
  const [showWeather, setShowWeather] = useState(false);
  const pos = [0,8,16,24,32,39];

  function getdate(value: Date | null) {
    if (value === null) {
      return "";
    }
    const date = new Date(value);
    return date.toDateString();
  }

  function DateDiff(date2: Date | null) {
    // sDate1 和 sDate2 是 2016-06-18 格式
    var today = new Date();
    if (date2 === null) {
      return -1;
    }
    const timeInMilisec: number = date2.getTime() - today.getTime();
    const daysBetweenDates: number = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));

    return daysBetweenDates;
  }

 // console.log(DateDiff(props.dateValue));

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=47.2375671&lon=9.5981724&appid=279977d85994f36f2e4635370fd6606b&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if(DateDiff(props.dateValue)<=5){
          const posOfDay = pos[DateDiff(props.dateValue)];
          setTemp(parseInt(data.list[posOfDay].main.temp));
          setIcon(data.list[posOfDay].weather[0].icon);
          setShowWeather(true);
        }
      });
  }, []);

  return (
    <div className="weatherBox">
      <div>{getdate(props.dateValue)}</div>
      <div className={`${showWeather ? "weatherBox-weather" : ""}`}>
        {showWeather && <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="weatherIcon for this date"
        />}   
        {showWeather && <p>{temp + "°C"}</p>}        
      </div>
    </div>
  );
}
