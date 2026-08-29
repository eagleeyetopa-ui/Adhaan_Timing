import React from 'react'

function StrdCard(props) {
  return (
    <div className={`rounded-xl px-4 py-3.5 flex justify-between items-center transition-all duration-300 ${
        props.isActive
          ? 'bg-app-card border-2 border-app-active-border shadow-glow'
          : 'bg-app-card border border-app-card-border'
      }`}>
      <span className='text-white font-semibold text-xl flex justify-center uppercase'>{props.prayertime.Name}</span>
      <span className='text-app-gold font-bold text-2xl flex justify-center uppercase'>{props.prayertime.time}</span>
    </div>
  )
}

export default StrdCard
