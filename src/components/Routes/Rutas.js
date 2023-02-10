import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentForm from "../PaymentForm/PaymentForm";
import RouterHome from "../RouterHome/RouterHome";

const Rutas = ({producto, addToCart, addToFav, deleteFromCart, deleteFromFav, clearCart, image}) => {

    const { carrito } = producto


    return (
        <Router>
            <Routes>
                <Route path="/PaymentForm" element={<PaymentForm carrito={carrito} clearCart={clearCart}/>}/>
                <Route path="/" element={<RouterHome 
                                            producto={producto} 
                                            addToCart={addToCart} 
                                            addToFav={addToFav}
                                            deleteFromCart={deleteFromCart}
                                            deleteFromFav={deleteFromFav} 
                                            clearCart={clearCart} 
                                            image={image}/>}
                                            />
            </Routes>
        </Router>
    )
}

export default Rutas;
