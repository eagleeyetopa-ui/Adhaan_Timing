import React, { useEffect, useState } from 'react'

function HeaderCard(props) {
  let [hour,sethour]=useState(0,0);
  let [mins,setmins]=useState(0,0);

  useEffect(()=>{
    const counTing=()=>{
    const date=new Date();
    const now=date.getTime();
    const target=new Date(props.nextprayer[0].time).getTime();
    const diff_Ms=target-now;
    const totmins=Math.floor(diff_Ms/(1000*60));
    const thour=Math.floor(totmins/60);
    let tmins=(totmins%60);
    tmins++;
    sethour(thour);
    setmins(tmins)
    }
    counTing();
    const counter=setInterval(counTing,1000);
    return ()=>clearInterval(counter);
  },[props.nextprayer[0]])

  return (
    <div className='w-full h-25 bg-app-hero-bg text-app-hero-text border-2 border-app-gold rounded-2xl shadow-lg px-6 py-2 flex flex-col gap-2'>
        <span className='text-slate-600 font-bold uppercase tracking-wider text-xl flex justify-center items-center'>Next Prayer <span className='text-app-hero-text font-black text-2xl ml-4'>{props.nextprayer[0].name}</span></span>
        <span className='text-amber-700 font-extrabold text-xl m-auto'><span className='text-3xl mr-1'>{hour}</span> Hours<span className='text-3xl mr-1 ml-1'>{mins}</span>mins remaining</span>
    </div>
  )
}

export default HeaderCard
// cleaar interval tb chlega jb nextpyaer change hoga and ciunter hr 1 sec calc krega taaki exact time pe val chnage kr paaye