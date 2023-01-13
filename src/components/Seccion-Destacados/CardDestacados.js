

import React from 'react'
import { useState } from 'react';
import './cardDestacados.css'



const CardDestacados = ({ prod }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <>
            <div className='card-container'
                onMouseEnter={() => setMostrar(true)}
                onMouseLeave={() => setMostrar(false)}
            >
                <figure>
                    <div className='card-image'>
                        <img src={require(`${prod.img}`)} alt="iamgen"></img>
                    </div>
                    <figcaption className='container-parrafo'>
                        <h3>{prod.titulo}</h3>
                        <div className='parrafo'>
                            {mostrar && <div className="descripcion">{prod.descripcion}</div>}
                            {mostrar && <div className="precio">{prod.precio}</div>}
                            {mostrar && <div className="antes">Antes <strike>{prod.antes}</strike></div>}
                        </div>
                        <p>{prod.discount}</p>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}

export default CardDestacados;