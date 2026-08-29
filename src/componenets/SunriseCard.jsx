import { Sunrise } from 'lucide-react'
import React from 'react'

function SunriseCard(props) {
  return (
     <div className='w-full h-10 bg-app-card/60 border border-app-card-border/50 rounded-xl flex justify-between px-6 items-center'>
        <span className='text-app-text-muted text-lg font-medium h-full flex justify-center items-center'>Sunrise  </span>
        <span><Sunrise className='text-app-gold-light text-sm h-10'/></span>
        <span className='text-app-gold-light text-xl font-semibold uppercase'>{props.prayertime.time}</span>
    </div>
  )
}

export default SunriseCard
