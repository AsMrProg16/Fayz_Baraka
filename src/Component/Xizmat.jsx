import React from 'react'
import '../index.css'
import imgX1 from '././images/bi_building.svg'
import imgX2 from '././images/si-glyph_building.svg'
import imgX3 from '././images/emojione-monotone_building-construction.svg'
import imgX4 from '././images/bi_building.svg'
export default function Xizmat() {
  return (
    <div className="services text-center parallax py-10 px-4" id="services"  >
    <h2 className="text-4xl p-4">Asosiy Xizmatlarimiz</h2>
    <div className="line-center"></div>
    <div className="flex gap-4 lg:gap-10 justify-center mt-10 flex-wrap featureServices">
      <div className="item bg-white rounded-3xl text-gray-900 flex flex-col justify-center items-center">
        <img src={imgX1} />
        <div className="pt-4">
          <p className="font-bold">Bino va inshootlar</p>
          <p>Qurilishi</p>
        </div>
      </div>
      <div className="item bg-white rounded-3xl text-gray-900 flex flex-col justify-center items-center">
        <img src={imgX2} />
        <div className="pt-4">
          <p className="font-bold">Tijorat binolari</p>
          <p>Qurilishi</p>
        </div>
      </div>
      <div className="item bg-white rounded-3xl text-gray-900 flex flex-col justify-center items-center activeSlideServ">
        <img src={imgX3} />
        <div className="pt-4">
          <p className="font-bold">Zamonaviy texnologiyalar</p>
          <p>Imkoniyati</p>
        </div>
      </div>
      <div className="item bg-white rounded-3xl text-gray-900 flex flex-col justify-center items-center">
        <img src={imgX4} />
        <div className="pt-4">
          <p className="font-bold">Qayta qurish</p>
          <p>Xizmatlari</p>
        </div>
      </div>
    </div>
  </div>
  )
}
