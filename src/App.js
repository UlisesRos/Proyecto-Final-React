import { Box } from "@chakra-ui/react";
import axios from "axios";
import SeccionSmartphone from "./components/seccion-smartphone/SeccionSmartphone";
import SeccionTvs from "./components/seccion-tvs/SeccionTvs";
import SeccionAudio from "./components/seccion-audio/SeccionAudio";
import { useEffect, useReducer } from "react";
import { shoppingReducer, initialState } from "./hooks/reducer/shoppingReducer";
import NavBar from "./components/NavBar/NavBar";
import HomeSlider from "./components/Home/HomeSlider";
import SeccionDestacados from "./components/Seccion-Destacados/SeccionDestacados";
import Nosotros from "./components/nosotros/Nosotros";
import imagenes from './img/nosotros/imagenes';
import Whatsapp from "./components/Whatsapp/whatsapp";
import Rutas from "./components/Routes/Rutas";
import BotonDeslizante from "./components/BotonDeslizante/BotonDeslizante";
import { TYPES } from "./hooks/actions/actionsCarrito";



const {READ_STATE ,ADD_TO_CART, REMOVE_ALL_PRODUCT, REMOVE_ONE_PRODUCT, CLEAR_CART} = TYPES

const image = imagenes;

const App = () => {

  const [state, dispatch] = useReducer(shoppingReducer, initialState)

  const read_state = async () => {
    const ENDPOINTS = {
      smartphone: "http://localhost:5000/productos-smartphone",
      tvs: "http://localhost:5000/productos-tvs",
      audio: "http://localhost:5000/productos-audio",
      destacados: "http://localhost:5000/productos-destacados",
      carrito: "http://localhost:5000/carrito"      
    };
    const resSmartphone = await axios.get(ENDPOINTS.smartphone),
      resTvs = await axios.get(ENDPOINTS.tvs),
      resAudio = await axios.get(ENDPOINTS.audio),
      resCarrito = await axios.get(ENDPOINTS.carrito),
      resDestacados = await axios.get(ENDPOINTS.destacados),
      productosSmart = resSmartphone.data,
      productosTvs = resTvs.data,
      productosAudio = resAudio.data,
      productosDestacados = resDestacados.data,
      productosCarrito = resCarrito.data

    dispatch({type: READ_STATE, payload: {
        productosSmart,
        productosTvs,
        productosAudio,
        productosDestacados,
        productosCarrito
  }})
    
  }

  useEffect(() => {
    read_state()
  }, []);

  const addToCart = async (data) => {

    //Unifico el estado
    const objetoUnificador = state.productosSmartphone.concat(state.productosTvs, state.productosAudio, state.productosDestacados)

    //Buscar el producto
    let nuevoProd = objetoUnificador.find(producto => producto.id === data.id)

    //Ver si el producto existe en el carrito
    let itemInCarrito = state.carrito.find(item => item.id === nuevoProd.id)

    if(itemInCarrito){
      let ENDPOINTS = `http://localhost:5000/carrito/${data.id}`

      let OPTIONS = {
        method: 'PUT',
        headers: {"content-type": "application/json"},
        data: JSON.stringify({...data, cantidad: itemInCarrito.cantidad + 1, precioT: itemInCarrito.precio.toFixed(3) * (itemInCarrito.cantidad + 1)})
      },
      res = await axios(ENDPOINTS, OPTIONS),
      itemData = await res.data

      dispatch({type: ADD_TO_CART, payload: {itemData}});
    }
    else {
      let OPTIONS = {
        method: 'POST',
        headers: {"content-type": "application/json"},
        data: JSON.stringify({ ...data, cantidad: 1, precioT: data.precio})
      };
      let res = await axios("http://localhost:5000/carrito", OPTIONS),
      itemData = await res.data

      dispatch({type: ADD_TO_CART, payload: {itemData}});
    }
  };

  const deleteFromCart = async (data, all = false) => {

    if(all) {
    
      let ENDPOINTS = `http://localhost:5000/carrito/${data.id}`

      let OPTIONS = {
        method: 'DELETE',
        headers: {"content-type": "application/json"},
      },
      
      res = await axios(ENDPOINTS, OPTIONS)

      dispatch({type: REMOVE_ALL_PRODUCT, payload: data.id});
    } 
    else {
    
      let itemAEliminar = state.carrito.find(item => item.id === data.id);

      if(itemAEliminar.cantidad > 1){

        let ENDPOINTS = `http://localhost:5000/carrito/${data.id}`

        let OPTIONS = {
          method: 'PUT',
          headers: {"content-type": "application/json"},
          data: JSON.stringify({...data, cantidad: itemAEliminar.cantidad - 1, precioT: itemAEliminar.precio.toFixed(3) * (itemAEliminar.cantidad - 1)})
        },

        res = await axios(ENDPOINTS, OPTIONS)

        dispatch({type: REMOVE_ONE_PRODUCT, payload: data.id});
      }
      else {

        let ENDPOINTS = `http://localhost:5000/carrito/${data.id}`

        let OPTIONS = {
          method: 'DELETE',
          headers: {"content-type": "application/json"},
        },

        res = await axios(ENDPOINTS, OPTIONS)

        dispatch({type: REMOVE_ONE_PRODUCT, payload: data.id});

      }
    }
  };

  const clearCart = async () => {


    state.carrito.map((prod) => {

      let ENDPOINTS = `http://localhost:5000/carrito/${prod.id}`

      let OPTIONS = {
        method: 'DELETE',
        headers: {"content-type": "application/json"},
      },

      res = axios(ENDPOINTS, OPTIONS)

    })

    dispatch({type: CLEAR_CART});
  }
     //Subo el componente Rutas simplemente para ver renderizado el formulario 
     //y poder mostrarlo en la tutoria, luego de subidos todos los componentes, 
     //reacomodare con react router
  return (
    <Box>
      <Box
        as="header">
          <Rutas/> 
          <NavBar producto={state} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} />
      </Box>
      <Box
        as="main">
          <HomeSlider/>   
          <Whatsapp />
          <SeccionDestacados producto={state.productosDestacados} addToCart={addToCart}/>
          <SeccionSmartphone producto={state.productosSmartphone} addToCart={addToCart}/>
          <SeccionTvs producto={state.productosTvs} addToCart={addToCart}/>
          <SeccionAudio producto={state.productosAudio} addToCart={addToCart}/>
          <Nosotros image={image}/>
      </Box>
      <BotonDeslizante />
    </Box>
  )
}


export default App