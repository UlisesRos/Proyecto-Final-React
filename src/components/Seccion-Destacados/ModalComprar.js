
import './modalComprar.css' 


const ModalComprar = ({ modalComprar, setModalComprar, prod }) => {
    return (
        <>
            {modalComprar &&
                <div className="container">
                    <div className="containerModal">
                        <div className="containerImg">
                            <img src={require(`${prod.img}`)} alt="iamgen"></img>
                        </div>
                        <h3 className='titulo'>{prod.titulo}</h3>
                        <p>Producto agregado correctamente</p>
                        <button onClick={() => setModalComprar(false)}>OK</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalComprar;