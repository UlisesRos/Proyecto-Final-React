import React from 'react'
import Swal from 'sweetalert2'

const BotonPediLaTuya = () => {
  const PediTuTarjeta = () => {
        Swal.fire({
            width: "500px",
            title: "Dejanos tus datos y te enviaremos tu PineappleCard",
            html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo">
            <input type="text" id="dni" class="swal2-input" placeholder="DNI sin puntos ni espacios">
            <input type="text" id="direccion" class="swal2-input" placeholder="Direccion">
            <input type="text" id="tel" class="swal2-input" placeholder="Telefono +54 9 11 ....">
            <input type="text" id="mail" class="swal2-input" placeholder="tuemail@ejemplo.com">`,
            confirmButtonText: 'Enviar',})
    }
  return (
    <button onClick={PediTuTarjeta} style={{
        color: 'var(--third-color)',
        fontFamily: 'var(--first-font)',
        fontSize: '1.6rem',
        borderRadius: '10px',
        width: '70%',
        heigth: '2rem',
    }}>
        <b>Pedí la tuya! que estás esperando?</b>
    </button>
  )
}

export default BotonPediLaTuya