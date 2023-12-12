import React from 'react'
import '../index.css'
import calendaricon from './images/Calendar.svg';
import callicon from './images/Call.svg'
export default function TopNavbar() {
  return (
    <div className="headInfo flex justify-between p-2 px-5 md:px-10 lg:px-20 text-white text-sm items-center text-gray-300">
    <div className="work-date flex gap-2 items-center">
      <img src={calendaricon} alt="" />
      <p className='tex_p'>Du-Ju: 8:00-17:00</p>  
    </div>
    <div className="call-us flex gap-2 items-center">
      <img src={callicon} alt="" />
      <a href="tel:+998902644040" class="hover:text-blue-500">+998902644040</a>
    </div>
  </div>
  )
}
