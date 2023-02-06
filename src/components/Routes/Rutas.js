import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentForm from "../PaymentForm/PaymentForm";
import RouterHome from "../RouterHome/RouterHome";

const Rutas = ({state, addToCart, deleteFromCart, clearCart, image}) => {

    return (
        <Router>
            <Routes>
                <Route path="/PaymentForm" element={<PaymentForm />}/>
                <Route path="/" element={<RouterHome state={state} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} image={image}/>}/>
            </Routes>
        </Router>
    )
}

export default Rutas;
