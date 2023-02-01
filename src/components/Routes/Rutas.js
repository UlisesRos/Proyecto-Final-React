import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaymentForm from "../PaymentForm/PaymentForm";
import BotonPayment from "./BotonPayment";

const Rutas = () => {
    return (
        <Router>
            <BotonPayment/>
            <Routes>
                <Route path="/PaymentForm" element={<PaymentForm />}/>
            </Routes>
        </Router>
    )
}

export default Rutas;