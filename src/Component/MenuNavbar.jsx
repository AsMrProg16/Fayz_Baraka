import React from 'react'
import '../index.css'
import logoimg from './images/logo.svg'
export default function MenuNavbar() {
  return (
    <nav className="flex justify-between px-4 md:px-10 lg:px-20 py-5 align-items-center flex-wrap" id="navbar">
        <div className="logo py-4 md:py-2 lg:py-0">
          <a href="/">
            <img src={logoimg} />
          </a>
        </div>
        <div className="flex gap-10 flex-wrap py-2 navbar">
          <a href="/">Bosh sahifa</a>
          <a>Loyihalar</a>
          <a>Tender</a>
          <a>Hujjatlar</a>
          <a>Aloqa uchun</a>
        </div>
    </nav>
  )
}
