import React, { useState } from 'react'
import Swal from "sweetalert2"
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css'
import '../../css/PaymentForm.css'


const PaymentForm = () => {
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
        Swal.fire({
            width: "500px",
            title: "El pago se ha procesado correctamente",
        })
    }

    return (
        <div className="layout">
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
                    <div className="form-group">
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
                    <div className="form-group">
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
                    <div className="form-row">
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
                            <label htmlFor="cuotas">Cantidad de cuotas</label>
                            <select 
                                type="text"
                                name="cuotas"
                                id="cuotas"
                                className="form-control"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}>
                                <option value="1">1 (sin interés) </option>
                                <option value="2">2 (sin interés) </option>
                                <option selected value="3">3 (sin interés)</option>
                                <option value="4">Ahora10 (10% de recargo) </option>
                                <option value="5">Ahora12 (15% de recargo) </option>
                            </select>
                        </div>
                    </div>
                    <button onClick={pagoExitoso} type="button" className="btn btn-success btn-block btn-lg">Pagar</button>
                </form>
            </div>
        </div>
        </div>
        
    )
}

export default PaymentForm