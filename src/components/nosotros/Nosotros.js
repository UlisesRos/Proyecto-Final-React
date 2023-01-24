
import github from '../../img/nosotros/github1.png'
import '../../css/Nosotros.css'


import React from 'react'

const Nosotros = ({image}) => {
  return (
    <div className='container' >
            {image.map(imagen => {
              return <figure style={{margin:'0.5rem', border:'none'}}>
                <img key={imagen.id} style={{width:'100px', height:'100px', borderRadius:'50%', marginTop:'0.5rem'}} src={imagen.img} alt="" />
                <h4 className='nombre'>{imagen.nombre}</h4>
                <h4 className='apellido'>{imagen.apellido}</h4>
                <a href={imagen.github} target="_blank" rel="noopener noreferrer"><img className='github'  src={github} alt="" /></a>
              </figure>
            })}
        </div>
  )
}

export default Nosotros