import fondoSmartphone from "./img/fondo/fondo-smartphone.png"
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import ListaTarjetas from "./ListaTarjetas";


const SeccionSmartphone = ({ producto }) => {

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
                h={["40vh", "50vh", "70vh"]}
                >
                    <Flex
                        flexDirection="column"
                        justify="center"
                        align="center"
                        rowGap={["65px" ,"70px", "130px"]}
                        >
                            <Heading
                                as="h2"
                                color="#331D4A"
                                fontFamily="'Roboto', sans-serif"
                                fontSize={["2rem", "2.5rem", "4rem"]}
                                mt="30px"
                                letterSpacing="8px"
                                textAlign="center"
                                textShadow="1px 1px 2px #000000"
                                    >Smartphone</Heading>
                            <Text
                                color="#331D4A"
                                fontFamily="'Roboto', sans-serif"
                                fontWeight="semibold"
                                fontSize={["1.2rem", "1.5rem", "2.5rem"]}
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
                        color="#331D4A"
                        textShadow="1px 1px 2px #000000"
                        >¡Elegi el tuyo!</Heading>
                    <ListaTarjetas producto={producto}/>
            </Flex>
        </Box>
    )
}

export default SeccionSmartphone
