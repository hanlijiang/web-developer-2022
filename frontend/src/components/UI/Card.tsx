import { ReactNode } from "react";
import "./Card.css";
import React from 'react';
interface CardProps{
    children: ReactNode; 
}
export default function Card(props: CardProps) {
  return (
    <div className="card">
          {props.children}
    </div>
  )
}
