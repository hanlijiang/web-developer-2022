import { Link } from 'react-router-dom'
import  './HomePageLink.css'
import React from 'react';
export default function HomePageLink(props:{title:string, classname:string}) {
  
const classNames = `homePage-LinkBtn ${props.classname}`
  return (
    <Link to="/">
        <div className={classNames}>
           {props.title}
        </div>
    </Link>
  )
}
