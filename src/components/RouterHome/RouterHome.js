import { Box } from '@chakra-ui/react';
import SeccionSmartphone from "../seccion-smartphone/SeccionSmartphone"
import SeccionTvs from "../seccion-tvs/SeccionTvs";
import SeccionAudio from "../seccion-audio/SeccionAudio";
import HomeSlider from "../Home/HomeSlider";
import SeccionDestacados from "../Seccion-Destacados/SeccionDestacados";
import Nosotros from "../nosotros/Nosotros";
import NavBar from '../NavBar/NavBar';
import Whatsapp from '../Whatsapp/whatsapp';
import BotonDeslizante from '../BotonDeslizante/BotonDeslizante';

const RouterHome = ({state, addToCart, deleteFromCart, clearCart, image}) => {
    return (
        <Box>
            <NavBar producto={state} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} />
            <HomeSlider/>
            <SeccionDestacados producto={state.productosDestacados} addToCart={addToCart}/>
            <SeccionSmartphone producto={state.productosSmartphone} addToCart={addToCart}/>
            <SeccionTvs producto={state.productosTvs} addToCart={addToCart}/>
            <SeccionAudio producto={state.productosAudio} addToCart={addToCart}/>
            <Nosotros image={image}/>
            <Whatsapp />
            <BotonDeslizante />
        </Box>
    )
}

export default RouterHome
