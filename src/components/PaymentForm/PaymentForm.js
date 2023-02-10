import React, { useState } from 'react';
import Swal from "sweetalert2";
import Cards from 'react-credit-cards-2';
import BotonVolver from "../Routes/BotonVolver";
import 'react-credit-cards-2/es/styles-compiled.css';
import '../../css/PaymentForm.css';


const PaymentForm = ({ carrito, clearCart }) => {
    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus : e.target.name
        })
    }

    const pagoExitoso = () => {

        if(state.number === "" || state.name === "" || state.expiry === "" || state.cvc === "" || state.focus === ""){
            Swal.fire('Debes completar todos los campos')
        }
        else{
            Swal.fire({
                title: 'Desea confirmar la compra?',
                text: "Este paso no podra ser revertido",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Confirmar pago!'
            }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                    'Pago Confirmado!',
                    'Muchas gracias por confiar en nosotros!.',
                    'success'
                )
                }
                setInterval(() => {
                    clearCart()
                    window.location.reload(true)
                }, 1000);
            })

        }
    }

    const total = (carrito.reduce((ac, prod) => ac + prod.precioT, 0).toFixed(3))
    const ahoraDiez = (carrito.reduce((ac, prod) => ac + prod.precioT, 0) + total * 0.1).toFixed(3)
    const ahoraDoce = (carrito.reduce((ac, prod) => ac + prod.precioT, 0) + total * 0.15).toFixed(3)

    return (
        <div className="layout">
            <p>EL MONDO A ABONAR ES DE :</p>
            <p style={{fontSize: "1.5rem"}}>$ {total}</p>
            <div className="card1">
            <div className="card-body">
                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <form>
                    <div className='marginLabel'> 
                        <label htmlFor="number">Número de la tarjeta</label>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            maxLength="16"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className="form-group marginLabel" >
                        <label htmlFor="name">Nombre (como aparece en la tarjeta) </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="20"
                            className="form-control"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div>
                        <div className='marginLabel'>
                            <label htmlFor="expiry">Fecha de vencimiento</label>
                            <input
                                type="text"
                                name="expiry"
                                id="expiry"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className='marginLabel'>
                            <label htmlFor="cvc">CVC (código de sguridad)</label>
                            <input
                                type="text"
                                name="cvc"
                                id="cvc"
                                maxLength="4"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className='marginLabel'>
                            <label htmlFor="cuotas">Cantidad de cuotas</label>
                            <select 
                                type="text"
                                name="cuotas"
                                id="cuotas"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}>
                                <option value="1">1 (sin interés) ${total}  </option>
                                <option value="2">2 (sin interés) ${total} </option>
                                <option selected value="3">3 (sin interés) ${total} </option>
                                <option value="4">Ahora10 (10% de recargo) ${ahoraDiez}</option>
                                <option value="5">Ahora12 (15% de recargo) ${ahoraDoce}</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={pagoExitoso} type="button" className="btn">Pagar</button>
                    <BotonVolver />
                </form>
            </div>
        </div>
        </div>
        
    )
}

export default PaymentForm