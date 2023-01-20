import React from 'react'
import icon from '../../img/whatsapp/whatsapp.png'
import '../../css/whatsapp.css'

const Whatsapp = () => {
  return (
    <div className="appWhatsapp">
        <a href="https://api.whatsapp.com/send?phone=5491130623271&text=Hola!&nbspme&nbsppueden&nbspayudar?"> <img src={icon} width={['40px','50px','60px']} height={['40px','50px', '60px']} alt='whatsapp' /></a>
    </div>
  )
}

export default Whatsapp