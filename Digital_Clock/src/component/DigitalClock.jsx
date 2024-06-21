import { useEffect, useState } from "react";
import React from "react";
import "../assets/style.css";

 function DigitalClock(){

const [time,setTime] = useState(new Date());

useEffect(() =>{
 const  intervalid = setInterval(() =>{
    setTime(new Date());
 },1000);

 return() => {
    clearInterval(intervalid);
 }
},[]);

function formatTime()
{
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 24 || 24;

    return `${zero(hours)}:${zero(minutes)}: ${zero(seconds)} ${ampm}`;


    function zero(number){
        return (number < 10 ? "0" : "") + number;
    }
}
    return(
        <div className="container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
 }
 export default DigitalClock;