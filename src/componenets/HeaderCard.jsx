import React, { useEffect, useState } from 'react'
import {Coordinates, CalculationMethod, PrayerTimes,SunnahTimes} from 'adhan'
const coordinate=new Coordinates(30.3165, 78.0322);
const params=CalculationMethod.Karachi();

function HeaderCard(props) {
  let [hour,sethour]=useState(0,0);
  let [mins,setmins]=useState(0,0);
  let [prayername,setprayername]=useState('');
  useEffect(()=>{
    const counTing=()=>{
      const date=new Date();
      const prayerTimes= new PrayerTimes(coordinate,date,params);
    const now=date.getTime();
    let nextprayer=prayerTimes.nextPrayer(); 
    let target;
    if(nextprayer==='none'){
      const tomorrow=new Date(date);
      tomorrow.setDate(tomorrow.getDate()+1);
      const tomorrowPrayer=new PrayerTimes(coordinate,tomorrow,params);
      nextprayer='fajr';
      setprayername(nextprayer);
    target=new Date(tomorrowPrayer.timeForPrayer(nextprayer)).getTime(); 
    }
    else{
    target=new Date(prayerTimes.timeForPrayer(nextprayer)).getTime();
    setprayername(prayerTimes.nextPrayer());  
  }
    const diff_Ms=target-now;
    const totmins=Math.floor(diff_Ms/(1000*60));
    const thour=Math.floor(totmins/60);
    let tmins=(totmins%60);
    sethour(thour);
    setmins(tmins)
    }
    counTing();
    const counter=setInterval(counTing,1000);
    return ()=>clearInterval(counter);
  },[])

  return (
    <div className='w-full h-25 bg-app-hero-bg text-app-hero-text border-2 border-app-gold rounded-2xl shadow-lg py-2 flex flex-col gap-2'>
        <span className='text-slate-600 font-bold uppercase tracking-wider text-xl flex justify-center items-center'>Next Prayer <span className='text-app-hero-text font-black text-2xl ml-4'>{prayername}</span></span>
        <span className='text-amber-700 font-extrabold text-xl m-auto'><span className='text-3xl mr-1'>{hour}</span> Hours<span className='text-3xl mr-1 ml-1'>{mins}</span>mins remaining</span>
    </div>
  )
}

export default HeaderCard
// cleaar interval tb chlega jb nextpyaer change hoga and ciunter hr 1 sec calc krega taaki exact time pe val chnage kr paaye