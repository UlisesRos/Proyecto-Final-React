import fondoSmartphone from "./img/fondo/fondo-smartphone.png"
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import ListaTarjetas from "./ListaTarjetas";


const SeccionSmartphone = ({ producto, addToCart, addToFav }) => {

    return (
        <Box id="SeccionSmartphone"
            display="flex"
            flexDir="column"
            flexWrap="wrap">
            
            <Box
                backgroundImage={fondoSmartphone}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                w="100%"
                h={["30vh", "50vh", "75vh"]}
                pt={["0px","0px","40px"]}
                >
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        rowGap={["30px" ,"50px", "100px"]}
                        >   
                                <Heading
                                    data-aos="flip-left"
                                    as="h2"
                                    color="--backg-color"
                                    fontFamily='--first-font'
                                    fontSize={["2rem", "3rem", "4rem"]}
                                    mt={["30px", "40px", "80px"]}
                                    letterSpacing="8px"
                                    textAlign="center"
                                    textShadow="1px 1px 2px #000000"
                                        >Smartphone</Heading>
                                <Text
                                    data-aos="flip-up" data-aos-delay="100" 
                                    color="--backg-color"
                                    fontFamily='--first-font'
                                    fontWeight="semibold"
                                    fontSize={["1rem", "1.5rem", "2rem"]}
                                    letterSpacing="4px"
                                    textAlign="center"
                                        >Estilo es comprar lo que te hace sentir bien.</Text>
                    </Flex>
            </Box>
            <Flex
                w="100%"
                flexDir="column"
                justify="center"
                align="center"
                >
                    <Heading
                        mt="50px"
                        color="--backg-color"
                        textShadow="1px 1px 2px #000000"
                        >¡Elegi el tuyo!</Heading>
                    {
                        producto.length === 0 ? 
                        <Text
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            h="50vh"
                            w="100%"
                            color="--backg-color"
                            fontFamily="--first-font"
                            fontWeight="bold"
                            fontSize={["2rem","2.5rem","3rem"]}
                            >
                            ERROR: LOS DATOS NO SE PUEDEN VER
                        </Text>
                        :
                        <ListaTarjetas producto={producto} addToCart={addToCart} addToFav={addToFav} />
                    }
            </Flex>
        </Box>
    )
}

export default SeccionSmartphone