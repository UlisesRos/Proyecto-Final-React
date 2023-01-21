

import CardListDestacados from './CardListDestacados'
import './seccionDestacados.css'

const SeccionDestacados = ({producto}) => {
    return (
        <div className='seccionDestacados' id="SeccionDestacados">
            <h2>Destacados</h2>
            <CardListDestacados producto={ producto }/>
        </div>
    )
}

export default SeccionDestacados