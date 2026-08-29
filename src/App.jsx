import React from 'react'
import HeaderCard from './componenets/HeaderCard'
import LocationCard from './componenets/LocationCard'
import StrdCard from './componenets/StrdCard'
import BottomBar from './componenets/BottomBar'
import SunriseCard from './componenets/SunriseCard'
import {Coordinates,CalculationMethod,PrayerTimes} from 'adhan'
import AdhaanLib from './utils/AdhaanLib'
import {prayer,nextprayer,current_prayer} from './utils/AdhaanLib'
console.log(prayer);

function App() {
  return (
    <div className='bg-app-bg h-screen p-6 flex flex-col justify-between'>
      <div className='flex flex-col gap-4'>
      <AdhaanLib/>
      <HeaderCard nextprayer={nextprayer}/>
      <LocationCard/>
      <StrdCard prayertime={prayer[0]} isActive={current_prayer?.toLocaleLowerCase()==='fajr'}/>
      <SunriseCard prayertime={prayer[1]}/>
      <StrdCard prayertime={prayer[2]} isActive={current_prayer?.toLocaleLowerCase()==='dhuhr'}/>
      <StrdCard prayertime={prayer[3]} isActive={current_prayer?.toLocaleLowerCase()==='asr'}/>
      <StrdCard prayertime={prayer[4]} isActive={current_prayer?.toLocaleLowerCase()==='maghrib'}/>
      <StrdCard prayertime={prayer[5]} isActive={current_prayer?.toLocaleLowerCase()==='isha'}/>
      <StrdCard prayertime={prayer[6]} isActive={false}/>
      </div>
      <div className='h-20 w-full'>
      <BottomBar/>
      </div>
    </div>
  )
}

export default App
