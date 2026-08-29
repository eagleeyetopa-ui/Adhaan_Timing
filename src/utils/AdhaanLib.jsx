import React from 'react'
import {Coordinates, CalculationMethod, PrayerTimes,SunnahTimes} from 'adhan'
const coordinate=new Coordinates(30.3165, 78.0322);
const date=new Date();
const params=CalculationMethod.Karachi();
const prayerTimes= new PrayerTimes(coordinate,date,params);
const next=prayerTimes.nextPrayer();
export const current_prayer=prayerTimes.currentPrayer();
export const nextprayer=[{
  name:prayerTimes.nextPrayer(),
  time:prayerTimes.timeForPrayer(next),
   hour: Temporal.Instant.fromEpochMilliseconds(prayerTimes.timeForPrayer(next))
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric'}),
  mins:Temporal.Instant.fromEpochMilliseconds(prayerTimes.timeForPrayer(next))
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { minute: 'numeric'}),
}]
console.log(nextprayer);
const sunahtime=new SunnahTimes(prayerTimes);
console.log(sunahtime.lastThirdOfTheNight);
export const prayer=[{
  id:"Fajr",
  time: Temporal.Instant.fromEpochMilliseconds(prayerTimes.fajr.getTime())
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric', minute: '2-digit' }),
  slot:"AM",
  Name:"Fajr"
},
{
  id:"Sunrise",
  time: Temporal.Instant.fromEpochMilliseconds(prayerTimes.sunrise.getTime())
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric', minute: '2-digit' }),
  slot:"AM",
  Name:"Sunrise"
},
{
  id:"Dhuhr",
  time: Temporal.Instant.fromEpochMilliseconds(prayerTimes.dhuhr.getTime())
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric', minute: '2-digit' }),
  slot:"PM",
  Name:"Dhuhr"
},
{
  id:"ASR",
  time: Temporal.Instant.fromEpochMilliseconds(prayerTimes.asr.getTime())
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric', minute: '2-digit' }),
  slot:"PM",
  Name:"ASR"
},
{
  id:"Maghrib",
  time: Temporal.Instant.fromEpochMilliseconds(prayerTimes.maghrib.getTime())
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric', minute: '2-digit' }),
  slot:"PM",
  Name:"Maghrib"
},
{
  id:"Isha",
  time: Temporal.Instant.fromEpochMilliseconds(prayerTimes.isha.getTime())
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric', minute: '2-digit' }),
  slot:"PM",
  Name:"Isha"
},  
{
  id:"Tahajjud",
  time: Temporal.Instant.fromEpochMilliseconds(sunahtime.lastThirdOfTheNight.getTime())
  .toZonedDateTimeISO('Asia/Kolkata')
  .toLocaleString('en-IN', { hour: 'numeric', minute: '2-digit' }),
  slot:"AM",
  Name:"Tahajjud"
},  
]
function AdhaanLib() {
    
  return (
    <div>
    </div>
  )
}

export default AdhaanLib
