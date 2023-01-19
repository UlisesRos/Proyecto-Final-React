import { Box } from "@chakra-ui/react";
import axios from "axios";
import SeccionSmartphone from "./components/seccion-smartphone/SeccionSmartphone";
import SeccionTvs from "./components/seccion-tvs/SeccionTvs";
import SeccionAudio from "./components/seccion-audio/SeccionAudio";
import { useEffect, useReducer } from "react";
import { shoppingReducer, initialState } from "./hooks/reducer/shoppingReducer";
import NavBar from "./components/NavBar/NavBar";
import HomeSlider from "./components/Home/HomeSlider";


const initalState = {
  productosSmartphone: [],
  productosTvs: [],
  productosAudio: [],
  productosBuscador: [],
}

const App = () => {

  const [state, dispatch] = useReducer(shoppingReducer, initialState)

  const read_state = async () => {
    const ENDPOINTS = {
      smartphone: "http://localhost:5000/productos-smartphone",
      tvs: "http://localhost:5000/productos-tvs",
      audio: "http://localhost:5000/productos-audio",
      buscador: "http://localhost:5000/productos-buscador"      
    };
    const resSmartphone = await axios.get(ENDPOINTS.smartphone),
      resTvs = await axios.get(ENDPOINTS.tvs),
      resAudio = await axios.get(ENDPOINTS.audio),
      resBuscador = await axios.get(ENDPOINTS.buscador),
      productosSmart = resSmartphone.data,
      productosTvs = resTvs.data,
      productosAudio = resAudio.data,
      productosBuscador = resBuscador.data

    setProductos({
      productosSmartphone: productosSmart,
      productosTvs: productosTvs,
      productosAudio: productosAudio,
      productosBuscador: productosBuscador
    })
  }

  useEffect(() => {
    read_state()
  }, []);

  const addToCart = async (id) => {

    dispatch({type: ADD_TO_CART, payload: id});
  };

  const deleteFromCart = (id, all = false) => {
    if(all) {
      dispatch({type: REMOVE_ALL_PRODUCT, payload: id});
    } else {
      dispatch({type: REMOVE_ONE_PRODUCT, payload:id});
    }
  };

  const clearCart = () => {
    dispatch({type: CLEAR_CART});
  }

  return (
    <Box>
      <Box
        as="header">
          <NavBar producto={state} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} />
      </Box>
      <Box
        as="main">
          <HomeSlider/>
          <SeccionSmartphone producto={Productos.productosSmartphone}/>
          <SeccionTvs producto={Productos.productosTvs}/>
          <SeccionAudio producto={Productos.productosAudio}/>
      </Box>
    </Box>
  )
}


export default App