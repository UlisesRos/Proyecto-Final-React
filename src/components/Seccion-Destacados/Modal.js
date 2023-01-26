

import './modal.css'

const Modal = ({ modal, setModal, prod }) => {
    return (
        <>
            {modal &&
                <div className="container-Exterior">
                    <div className="containerModal">
                        <h3 className='titulo'>Caracteristicas Generales</h3>
                        <div>
                            <p>{prod.descripcion}</p>
                        </div>
                        <button onClick={() => setModal(false)}>OK</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;