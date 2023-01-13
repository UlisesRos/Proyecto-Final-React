
// import React from 'react'
import CardDestacados from './CardDestacados'


const CardListDestacados = ({producto}) => {
    return (
        <div>
            {
                producto.map(prod => <CardDestacados key={prod.id} prod={prod}/>)

            }
        </div>
    )

}

export default CardListDestacados;