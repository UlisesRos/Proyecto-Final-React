

import CardListDestacados from './CardListDestacados'
import './seccionDestacados.css'

const SeccionDestacados = ({producto, addToCart}) => {
    return (
        <div className='seccionDestacados' id="SeccionDestacados">
            <h2>Destacados</h2>
            <CardListDestacados producto={ producto} addToCart={addToCart}/>
        </div>
    )
}

export default SeccionDestacados