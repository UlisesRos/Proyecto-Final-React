
// import React from 'react'
import CardDestacados from './CardDestacados'
import './cardListDestacados.css'


const CardListDestacados = ({producto}) => {
    return (
        <div className='cardListDestacados'>
            {
                producto.map(prod => <CardDestacados key={prod.id} prod={prod}/>)

            }
        </div>
    )

}

export default CardListDestacados;