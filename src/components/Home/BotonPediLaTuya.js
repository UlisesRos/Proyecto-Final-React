import React from 'react'
import Swal from 'sweetalert2'

const BotonPediLaTuya = () => {
  const pediLaTuya = () => {
    Swal.fire({
      width: "500px",
      title: "Dejanos tus datos y te enviaremos tu Pineapple Card",
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre completo">
      <input type="text" id="dni" class="swal2-input" placeholder="DNI sin puntos ni espacios">
<input type="text" id="telefono" class="swal2-input" placeholder="+54 11 0000 0000">
<input type="text" id="mail" class="swal2-input" placeholder="tuemail@ejemplo.com">
<input type="text" id="direccion" class="swal2-input" placeholder="Direccion">`,
confirmButtonText: 'Enviar',
  })
}
  return (
    <button style={{
        color: 'var(--third-color)',
        fontFamily: 'var(--first-font)',
        fontSize: '1.6rem',
        borderRadius: '10px',
        width: '70%',
        heigth: '2rem',
    }} onClick={pediLaTuya} >
        <b>Pedí la tuya! que estás esperando?</b>
    </button>
  )
}

export default BotonPediLaTuya