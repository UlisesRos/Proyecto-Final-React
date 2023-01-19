import fondoSmartphone from "./img/fondo/fondo-smartphone.png"
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import ListaTarjetas from "./ListaTarjetas";


const SeccionSmartphone = ({ producto, addToCart }) => {

    return (
        <Box
            display="flex"
            flexDir="column"
            flexWrap="wrap">
            
            <Box
                backgroundImage={fondoSmartphone}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                w="100%"
                h={["40vh", "50vh", "100vh"]}
                >
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        rowGap={["65px" ,"70px", "130px"]}
                        >
                            <Heading
                                as="h2"
                                color="--backg-color"
                                fontFamily='--first-font'
                                fontSize={["3rem", "3.5rem", "6rem"]}
                                mt={["40px", "70px", "150px"]}
                                letterSpacing="8px"
                                textAlign="center"
                                textShadow="1px 1px 2px #000000"
                                    >Smartphone</Heading>
                            <Text
                                color="--backg-color"
                                fontFamily='--first-font'
                                fontWeight="semibold"
                                fontSize={["1.4rem", "1.7rem", "3rem"]}
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
                    <ListaTarjetas producto={producto} addToCart={addToCart} />
            </Flex>
        </Box>
    )
}

export default SeccionSmartphone
