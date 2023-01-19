import { TYPES } from "../actions/actionsCarrito";

const {READ_STATE, ADD_TO_CART, REMOVE_ONE_PRODUCT, REMOVE_ALL_PRODUCT, CLEAR_CART} = TYPES

export const initialState = {
    productosSmartphone: [],
    productosTvs: [],
    productosAudio: [],
    carrito: []
};


export const shoppingReducer = (state, action) => {
    
    switch (action.type) {
        case READ_STATE:{
            return {
                ...state,
                productosSmartphone: action.payload.productosSmart,
                productosTvs: action.payload.productosTvs,
                productosAudio: action.payload.productosAudio,
                carrito: action.payload.productosCarrito
            }
        }

        case ADD_TO_CART:{
            //Unifico el estado
            const objetoUnificador = state.productosSmartphone.concat(state.productosTvs, state.productosAudio)

            //Buscar el producto
            let nuevoProd = objetoUnificador.find(producto => producto.id === action.payload)


            //Ver si el producto existe en el carrito
            let itemInCarrito = state.carrito.find(item => item.id === nuevoProd.id)

            return itemInCarrito
                ? {  //Si existe el producto en el carrito, incremento la cantidad
                    ...state,
                    carrito: state.carrito.map(item =>  
                        item.id === nuevoProd.id
                        ? { ...item, cantidad: item.cantidad + 1} 
                        : item
                        ),
                }
                : { // Si no existe agregamos el producto al carrito con 1 en la cantidad
                    ...state,
                    carrito: [...state.carrito, { ...nuevoProd, cantidad: 1 }],
                }
        }

        case REMOVE_ONE_PRODUCT:{
            //Buscamos el producto dentro del carrito
            let itemAEliminar = state.carrito.find(item => item.id === action.payload);

            return itemAEliminar.cantidad > 1 
            ? { //Si el producto dentro del carrito tiene mas de 1, le restamos 1
                ...state,
                carrito: state.carrito.map(item => 
                    item.id === action.payload
                    ? {...item, cantidad: item.cantidad - 1}
                    : item
                ),
            }
            : { // Si solo tiene 1, lo eliminamos por completo
                ...state,
                carrito: state.carrito.filter(item => item.id !== action.payload)
            }
        }

        case REMOVE_ALL_PRODUCT: {
            
            return {
                ...state,
                carrito: state.carrito.filter(item => item.id !== action.payload)
            }
        }

        case CLEAR_CART:{
            
            return {
                ...state,
                carrito: initialState.carrito
            }
        }
    
        default:
            return state;
    }

    }
