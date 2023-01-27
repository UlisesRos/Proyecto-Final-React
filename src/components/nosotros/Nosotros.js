
import github from '../../img/nosotros/github1.png'
import '../../css/Nosotros.css'


import React from 'react'

const Nosotros = ({image}) => {
  return (
    <section className='seccionNostoros' id="SeccionNosotros">
    <h2>Nosotros</h2>
    <div className='container' >
            {image.map((imagen, index) => {
              return <figure key={index} className="card" style={{margin:'0.5rem', border:'none'}}>
                  <img key={imagen.id} style={{width:'105px', height:'105px', borderRadius:'50%', marginTop:'0.5rem'}} src={imagen.img} alt="" />
                  <h4 className='nombre'>{imagen.nombre} {imagen.apellido}</h4>
                  <a href={imagen.github} target="_blank" rel="noopener noreferrer"><img className='github'  src={github} alt=""/></a>
              </figure>
            })}
        </div>
    </section>
  )
}

export default Nosotros