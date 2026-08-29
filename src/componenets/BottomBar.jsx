import React from 'react'
import { Calendar, Compass, House, Settings } from 'lucide-react';

function BottomBar() {
  return (
    <div className='bg-app-bg/95 w-full border-t border-app-card-border backdrop-blur-md h-full flex flex-row justify-between p-6'>
      <button className='text-app-gold font-semibold'><span className='flex justify-center'><House/></span>Home</button>
      <button className='text-app-text-muted hover:text-white'><span className='flex justify-center'><Calendar/></span>Calender</button>
      <button className='text-app-text-muted hover:text-white'><span className='flex justify-center'><Compass/></span>Qibla</button>
      <button className='text-app-text-muted hover:text-white'><span className='flex justify-center'><Settings/></span>Settings</button>
    </div>
  )
}

export default BottomBar
// bg-app-bg/95