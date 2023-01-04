import { Box } from "@chakra-ui/react";
import SeccionSmartphone from "./components/seccion-smartphone/SeccionSmartphone";

const producto = [
  {
    id: 1,
    img: "https://armoto.vtexassets.com/arquivos/ids/163823-500-auto?v=1759093632&width=500&height=auto&aspect=true",
    titulo: "Motorola Edge 30",
    descripcion: "Motorola Edge 30 Fusion 256 GB opal 12 GB RAM",
    precio: "$ 129.999",
    boton: "Comprar"
  },
  {
    id: 2,
    img: "https://armoto.vtexassets.com/arquivos/ids/163796-500-auto?v=1759093939&width=500&height=auto&aspect=true",
    titulo: "Moto G32",
    descripcion: "Celular Motorola Moto G32 4/128gb Plata Satinado",
    precio: "$ 65.999",
    boton: "Comprar"
  },
  {
    id: 3,
    img: "https://armoto.vtexassets.com/arquivos/ids/163829-500-auto?v=1759093897&width=500&height=auto&aspect=true",
    titulo: "Moto G52",
    descripcion: "Celular Motorola Moto G52 128GB",
    precio: "$ 75.999",
    boton: "Comprar"
  },
  {
    id: 4,
    img: "https://armoto.vtexassets.com/arquivos/ids/163817-800-auto?v=638071417161630000&width=800&height=auto&aspect=true",
    titulo: "Moto E22",
    descripcion: "Celular Motorola Moto E22 4/128gb Negro",
    precio: "$ 42.999",
    boton: "Comprar"
  },
]


const App = () => {
  return (
    <Box>
      <SeccionSmartphone producto={producto}/>
    </Box>
  )
}

export default App;
