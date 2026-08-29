import React from 'react'

function LocationCard() {
  const date=new Date();
  return (
    <div className='w-full h-10 bg-app-card rounded-xl border border-app-card-border'>
      <span className='text-app-text-muted text-sm font-medium h-full flex justify-center items-center'>Dehradun,India | {date.toLocaleDateString('en-IN', { weekday: 'long' })}, {date.getDate()}  {date.toLocaleDateString('en-IN',{month:'short'})} , {date.getFullYear()}</span>
    </div>
  )
}

export default LocationCard
