import React from 'react'
import '../index.css'
import markimg from './images/mark.svg'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'

export default function Home() {
  return (
    <div className="home flex">
      <section className="homeInfo pl-5 pr-5 lg:pl-20 lg:pr-10">
        <div className="main-text">
          <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-widee">
            <span className="text-white px-4 rounded-md bg-primary font-bold">FAYZ</span>BARAKA
          </h1>
          <p className="py-4 tracking-wider">
            <b>"FAYZ BARAKA KLASSIK"</b> MCHJ QURILISH KOMPANIYASI
          </p>
          <p className="my-12 text-sm text-indent text-gray-600">
            <img src={markimg} className="mark-icon" alt=""/>
            Biz amalga oshirayotgan har bir loyiha bilan biz o'z burchimizni
            baland qilib qo'yamiz va o'z sohamizdagi eng yaxshi odamlarga o'z
            mijozlarimiz tasavvurini haqiqatga aylantirish uchun qilayotgan
            ishimizni chin ko'ngildan sevamiz.
          </p>
          <div className="flex justify-between">
            <div></div>
            <a href="tel: +998902644040" className="bg-primary text-white px-5 py-3 rounded hover:bg-gray-700 font-semibold">Biz bilan bog'laning</a>
          </div>
        </div>
        <div className="featureBuildings flex gap-6 mt-10 md:flex-wrap items-center justify-center">
          <img src={img1} className="activeSlide" />
          <img src={img2} className="" />
          <img src={img3} className="" />
          <img src={img4} className="" />
        </div>
      </section>
      <section className="homeBG"></section> 

    
    </div>  
  )
}
