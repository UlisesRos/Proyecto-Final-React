import { Box, Flex } from "@chakra-ui/react";
import TarjetaMobile from "./TarjetaMobile";
import SwiperTvs from "./SwiperTvs";



const ListaTarjetas = ({ producto, addToCart}) => {


    return (
        <Flex
            mt="30px"
            h="90vh"
            w="100%"
            justify="center"
            align="center"
            >
            <Box
                w="150%"
                m="100px 0 150px 0"
                display={["none", "none", "flex"]}
                justifyContent="space-around"
                alignItems="center"
                rowGap="50px"
                >
                {
                    producto.map(prod => <TarjetaMobile key={ prod.id } prod={ prod } addToCart={addToCart}/>)
                }
            </Box>
            <Box
                display={["flex", "flex", "none"]}
                h="480px"
                w="350px"
                m="50px 0 50px 0"
                >
                    <SwiperTvs producto={producto} addToCart={addToCart} />
            </Box>
        </Flex>
    )
}

export default ListaTarjetas
