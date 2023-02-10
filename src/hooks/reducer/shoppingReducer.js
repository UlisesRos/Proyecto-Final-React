import { TYPES } from "../actions/actionsCarrito";

const {READ_STATE, ADD_TO_CART, REMOVE_ONE_PRODUCT, REMOVE_ALL_PRODUCT, CLEAR_CART, ADD_TO_FAV, REMOVE_FAV} = TYPES

export const initialState = {
    productosSmartphone: [],
    productosTvs: [],
    productosAudio: [],
    productosDestacados: [],
    carrito: [],
    favoritos: []
};


export const shoppingReducer = (state, action) => {
    
    switch (action.type) {
        case READ_STATE:{
            return {
                ...state,
                productosSmartphone: action.payload.productosSmart,
                productosTvs: action.payload.productosTvs,
                productosAudio: action.payload.productosAudio,
                productosDestacados: action.payload.productosDestacados,
                carrito: action.payload.productosCarrito,
                favoritos: action.payload.productosFavoritos
            }
        }

        case ADD_TO_CART:{

            //Unifico el estado
            const objetoUnificador = state.productosSmartphone.concat(state.productosTvs, state.productosAudio, state.productosDestacados, state.productosFavoritos)

            //Buscar el producto
            let nuevoProd = objetoUnificador.find(producto => producto.id === action.payload.itemData.id)

            //Ver si el producto existe en el carrito
            let itemInCarrito = state.carrito.find(item => item.id === nuevoProd.id)
            return itemInCarrito
                ? {  //Si existe el producto en el carrito, incremento la cantidad
                    ...state,
                    carrito: state.carrito.map(item =>  
                        item.id === nuevoProd.id
                        ? { ...item, cantidad: item.cantidad + 1, precioT: item.precio.toFixed(3) * (item.cantidad + 1)} 
                        : item
                        ),
                }
                : { // Si no existe agregamos el producto al carrito con 1 en la cantidad
                    ...state,
                    carrito: [...state.carrito, { ...nuevoProd, cantidad: 1, precioT: nuevoProd.precio}],
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
                    ? {...item, cantidad: item.cantidad - 1, precioT: item.precio.toFixed(3) * (item.cantidad - 1)}
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

        case ADD_TO_FAV:{

            const objetoUnificador = state.productosSmartphone.concat(state.productosTvs, state.productosAudio, state.productosDestacados)

            let nuevoProd = objetoUnificador.find(producto => producto.id === action.payload.itemData.id)

            return {
                ...state,
                favoritos: [...state.favoritos, { ...nuevoProd }],
            }
        }

        case REMOVE_FAV:{

            window.location.reload(true)

            return {
                ...state,
                carrito: state.favoritos.filter(item => item.id !== action.payload)
            }
        }
    
        default:
            return state;
    }

    }
