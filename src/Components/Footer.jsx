import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Realizado por Samuel Gomez en</p>
        <img src="/images/DH.png" width={200} alt='DH-logo' />
      </div>
        <div className='icons'>
          <a href="https://www.facebook.com/"><h3><FaFacebook/></h3></a>
          <a href="https://www.instagram.com/"><h3><FaInstagram/></h3></a>
          <a href="https://web.whatsapp.com/"><h3><FaWhatsapp/></h3></a>
          <a href="https://www.tiktok.com/"><h3><FaTiktok/></h3></a>
        </div>
    </footer>
  )
}

export default Footer
