import { Box, Flex } from "@chakra-ui/react";
import TarjetaMobile from "./TarjetaMobile";
import SwiperSmartphone from "./SwiperSmartphone";



const ListaTarjetas = ({producto}) => {


    return (
        <Flex
            justify="center"
            align="center"
            >
            <Box
                m="100px 0 150px 0"
                display={["none", "none", "grid"]}
                gridTemplateColumns="repeat(2, 600px)"
                justifyItems="center"
                rowGap="150px"
                >
                {
                    producto.map(prod => <TarjetaMobile key={ prod.id } prod={ prod }/>)
                }
            </Box>
            <Box
                display={["flex", "flex", "none"]}
                h="450px"
                w="350px"
                m="50px 0 50px 0"
                >
                    <SwiperSmartphone producto={producto}/>
            </Box>
        </Flex>
    )
}

export default ListaTarjetas
