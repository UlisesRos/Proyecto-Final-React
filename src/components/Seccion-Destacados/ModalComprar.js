
import './modalComprar.css' 


const ModalComprar = ({ modalComprar, setModalComprar, prod, addToCart }) => {

    const comprar = () => {
        addToCart(prod.id);
        setModalComprar(false)
    }

    return (
        <>
            {modalComprar &&
                <div className="container">
                    <div className="containerModal">
                        <div className="containerImg">
                            <img src={prod.img} alt="iamgen"></img>
                        </div>
                        <h3 className='titulo'>{prod.titulo}</h3>
                        <p>Producto agregado correctamente</p>
                        <button onClick={() => comprar(prod.id)  }>OK</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalComprar;