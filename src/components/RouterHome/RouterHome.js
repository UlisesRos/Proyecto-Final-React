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
import Footer from '../Footer/Footer';

const RouterHome = ({producto, addToCart, addToFav, deleteFromCart, deleteFromFav, clearCart, image}) => {
    return (
        <Box>
            <NavBar 
                producto={producto} 
                addToCart={addToCart} 
                deleteFromCart={deleteFromCart} 
                deleteFromFav={deleteFromFav} 
                clearCart={clearCart} 
                addToFav={addToFav}
                />
            <HomeSlider/>
            <SeccionDestacados 
                producto={producto.productosDestacados} 
                addToCart={addToCart}
                />
            <SeccionSmartphone 
                producto={producto.productosSmartphone} 
                addToCart={addToCart} 
                addToFav={addToFav}
                />
            <SeccionTvs 
                producto={producto.productosTvs} 
                addToCart={addToCart}
                addToFav={addToFav}
                />
            <SeccionAudio 
                producto={producto.productosAudio} 
                addToCart={addToCart} 
                addToFav={addToFav}
                />
            <Nosotros 
                image={image}
                />
            <Footer />
            <Whatsapp />
            <BotonDeslizante />
        </Box>
    )
}

export default RouterHome
