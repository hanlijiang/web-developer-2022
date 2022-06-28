import "./ServiceIcon.css";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessibleIcon from "@mui/icons-material/Accessible";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PetsIcon from "@mui/icons-material/Pets";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import ChairIcon from "@mui/icons-material/Chair";
import CallIcon from "@mui/icons-material/Call";
import LiquorIcon from "@mui/icons-material/Liquor";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import TvIcon from '@mui/icons-material/Tv';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import React from 'react';
export default function ServiceIcon(props: { roomType: string }) {
  const roomType = props.roomType;

  let iconColor = { color: "rgba(0, 0, 0, 0.199)" };

  if (roomType.indexOf("Deluex") !== -1) {
    iconColor = { color: "black" };
  }

  return (
    <ul className="serviceIcon">
      <li>
        <EmojiFoodBeverageIcon />
        <p>breakfast</p>
      </li>
      <li style={iconColor}>
        <LiquorIcon />
        <p>Mini Bar</p>
      </li>
      <li>
        <DryCleaningIcon />
        <p>laundry</p>
      </li>
      <li>
        <RssFeedIcon />
        <p>Wifi</p>
      </li>
      <li style={{color:"rgba(0, 0, 0, 0.199)"}}>
        <BedroomBabyIcon />
        <p>kids</p>
      </li>
      <li>
        <CallIcon />
        <p>phone</p>
      </li>
      <li style={iconColor}>
        <AccessibleIcon />
        <p>Accessibility</p>
      </li>
      <li style={iconColor}>
        <KitchenIcon />
        <p>frige</p>
      </li>
      <li style={iconColor}>
        <ChairIcon />
        <p>couch</p>
      </li>
      <li style={{color:"rgba(0, 0, 0, 0.199)"}}>
        <PetsIcon />
        <p>pets</p>
      </li>
      <li>
        <SmokeFreeIcon />
        <p>non-smoking</p>
      </li>
      <li>
        <AcUnitIcon />
        <p>air-con</p>
      </li>
      <li>
        <AccessAlarmIcon />
        <p>morning-Call</p>
      </li>
      <li style={iconColor}>
        <TvIcon />
        <p>TV</p>
      </li>
      <li style={iconColor}>
        <BathtubIcon />
        <p>Bath tub</p>
      </li>
      <li style={{color:"rgba(0, 0, 0, 0.199)"}}>
        <BalconyIcon />
        <p>Balcony</p>
      </li>
    </ul>
  );
}
