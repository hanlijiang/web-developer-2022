import "./App.css";
import Header from "./components/layout/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoomPage from "./components/RoomDetailPage/RoomPage";
import AvailableRooms from "./components/layout/Rooms/AvailableRooms";
import React from 'react';

export interface Room {
  id: string;
  roomType: string;
  bed: string;
  price: number;
  roomSize: number;
  person: string;
}

// const ROOM_TYPE = [
//   {
//     id: "r1",
//     roomType: "Single Room",
//     bed: "1 single bed",
//     price: 68,
//     roomSize: 18,
//     person: "1 person",
//   },
//   {
//     id: "r2",
//     roomType: "Single Deluex Room",
//     bed: "1 single XL bed",
//     price: 88,
//     roomSize: 20,
//     person: "1 person",
//   },
//   {
//     id: "r3",
//     roomType: "Double Room",
//     bed: "1 double bed",
//     price: 108,
//     roomSize: 24,
//     person: "2 person",
//   },
//   {
//     id: "r4",
//     roomType: "Double Deluex Room",
//     bed: "1 Queen size double bed",
//     price: 128,
//     roomSize: 28,
//     person: "2 person",
//   },
//   {
//     id: "r5",
//     roomType: "Twin room",
//     bed: "2 single beds",
//     price: 128,
//     roomSize: 24,
//     person: "2 person",
//   },
//   {
//     id: "r6",
//     roomType: "Twin room Deluex room",
//     bed: "2 single XL beds",
//     price: 148,
//     roomSize: 28,
//     person: "2 person",
//   },
// ];

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-page">
              <AvailableRooms/>
              <Header />
            </div>
          }
        />
        <Route path="/room-page" element={<RoomPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    //
  );
}

export default App;
