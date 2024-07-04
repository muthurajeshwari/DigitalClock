import './App.css';
import {useState,useEffect} from "react";

function App() {
  const [time,setTime]=useState(new Date());
  useEffect(()=>{
    const timer=setInterval(()=> {
      setTime(new Date());
    },1000);

    return ()=> clearInterval(timer);
  },[]);

  const format=(hour)=>{
    return hour===0 ? 12 : hour>12 ? hour-12 :hour;
  }
  const formatHour=(num)=>{
    return num<10 ? `0${num}` : num;
  }

  const formatDate=(date)=>{
    const options= {weekday:"long" ,year:"numeric" ,month:"long" , day:"numeric"};
      return date.toLocaleDateString(undefined,options);
  }
  return (
    <>
   
   <div className='digital-clock'></div>
   <h1>Digital Clock</h1>
   <div className='time'>{formatHour(format(time.getHours()))} : 
    {formatHour(time.getMinutes())}:
    {formatHour(time.getSeconds())}
    {time.getHours()>=12 ? " PM" : "AM"}
   </div>
   <div className='date'>{formatDate(time)}</div>
    </>
  );
}

export default App;
