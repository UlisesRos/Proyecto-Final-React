import { Box } from "@chakra-ui/react";
import HomeSlider from "./components/Home/HomeSlider";
import SeccionSmartphone from "./components/seccion-smartphone/SeccionSmartphone";
import TarjetaEscritorio from "./components/seccion-smartphone/TarjetaEscrtorio";
import TarjetaMobile from "./components/seccion-smartphone/TarjetaMobile";

const App = () => {
  return (
    <Box>
      <SeccionSmartphone/>
      <HomeSlider />
    </Box>
  )
}

export default App;
