import { Box } from "@chakra-ui/react";
import axios from "axios";
import SeccionSmartphone from "./components/seccion-smartphone/SeccionSmartphone";
import SeccionTvs from "./components/seccion-tvs/SeccionTvs";
import SeccionAudio from "./components/seccion-audio/SeccionAudio";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HomeSlider from "./components/Home/HomeSlider";
import SeccionDestacados from "./components/Seccion-Destacados/SeccionDestacados";

const initalState = {
  productosSmartphone: [],
  productosTvs: [],
  productosAudio: [],
  productosDestacados: []
}

const App = () => {

  const [Productos, setProductos] = useState(initalState)

  const infoProductos = async () => {
    const ENDPOINTS = {
      smartphone: "http://localhost:5000/productos-smartphone",
      tvs: "http://localhost:5000/productos-tvs",
      audio: "http://localhost:5000/productos-audio",
      destacados: "http://localhost:5000/productos-destacados"
    };
    const resSmartphone = await axios.get(ENDPOINTS.smartphone),
      resTvs = await axios.get(ENDPOINTS.tvs),
      resAudio = await axios.get(ENDPOINTS.audio),
      resDestacados = await axios.get(ENDPOINTS.destacados),
      productosSmart = resSmartphone.data,
      productosTvs = resTvs.data,
      productosAudio = resAudio.data,
      productosDestacados = resDestacados.data

    setProductos({
      productosSmartphone: productosSmart,
      productosTvs: productosTvs,
      productosAudio: productosAudio,
      productosDestacados: productosDestacados
    })
  }

  useEffect(() => {
    infoProductos()
  }, [])
  
  return (
    <Box>
      <Box
        as="header">
          <NavBar/>
      </Box>
      <Box
        as="main">
          <HomeSlider/>
          <SeccionDestacados producto={Productos.productosDestacados}/>
          <SeccionSmartphone producto={Productos.productosSmartphone}/>
          <SeccionTvs producto={Productos.productosTvs}/>
          <SeccionAudio producto={Productos.productosAudio}/>
          

      </Box>
    </Box>
  )
}


export default App