

import CardListDestacados from './CardListDestacados'
import './seccionDestacados.css'

const SeccionDestacados = ({producto}) => {
    return (
        <div className='seccionDestacados'>
            <h2>Destacados</h2>
            <CardListDestacados producto={ producto }/>
        </div>
    )
}

export default SeccionDestacados