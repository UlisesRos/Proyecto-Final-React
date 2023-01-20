import fondoTvs from "./img/fondo-tv.png"
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import ListaTarjetas from "./ListaTarjetas";


const SeccionTvs = ({ producto, addToCart }) => {

    return (
        <Box
            display="flex"
            flexDir="column"
            flexWrap="wrap">
            
            <Box
                backgroundImage={fondoTvs}
                backgroundColor="--backg-second-color"
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                w="100%"
                h={["30vh", "40vh", "70vh"]}
                >
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        rowGap={["30px" ,"50px", "100px"]}
                        >
                            <Heading
                                as="h2"
                                color="--white-color"
                                fontFamily='--first-font'
                                fontSize={["2rem", "3rem", "4rem"]}
                                mt={["50px", "40px", "80px"]}
                                letterSpacing="8px"
                                textAlign="center"
                                textShadow="1px 1px 2px #000000"
                                    >TV'S</Heading>
                            <Text
                                color="--white-color"
                                fontFamily='--first-font'
                                fontWeight="semibold"
                                fontSize={["1rem", "1.5rem", "2rem"]}
                                letterSpacing="4px"
                                textAlign="center"
                                    >Descubre aquí un interés que te asombrará</Text>
                    </Flex>
            </Box>
            <Flex
                w="100%"
                flexDir="column"
                justify="center"
                align="center"
                background="--backg-second-color"
                >
                    <Heading
                        mt="50px"
                        color="--white-color"
                        textShadow="1px 1px 2px #000000"
                        >¡Elegi el tuyo!</Heading>
                    <ListaTarjetas producto={producto} addToCart={addToCart} />
            </Flex>
        </Box>
    )
}

export default SeccionTvs