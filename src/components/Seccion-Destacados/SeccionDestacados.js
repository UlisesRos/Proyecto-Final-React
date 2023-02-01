

import CardListDestacados from './CardListDestacados'
import './seccionDestacados.css'

const SeccionDestacados = ({producto, addToCart}) => {
    return (
        <div className='seccionDestacados' id="SeccionDestacados" >
            <h2 data-aos="zoom-out-right">Destacados</h2>
            <div data-aos="zoom-out-right">
                {
                    producto.length === 0 ? 
                    <p className='errorTarjetas'
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        h="50vh"
                        w="100%"
                        color="--backg-color"
                        fontFamily="--first-font"
                        fontWeight="bold"
                        fontSize={["2rem","2.5rem","3rem"]}
                        >
                        ERROR: LOS DATOS NO SE PUEDEN VER
                    </p>
                    :
                    <CardListDestacados producto={ producto} addToCart={addToCart}/>
                }
            </div>
        </div>
    )
}

export default SeccionDestacados