import fondoTvs from "./img/fondo-tv.png"
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import ListaTarjetas from "./ListaTarjetas";


const SeccionTvs = ({ producto }) => {

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
                                color="--white-color"
                                fontFamily='--first-font'
                                fontSize={["3rem", "3.5rem", "6rem"]}
                                mt={["40px", "70px", "150px"]}
                                letterSpacing="8px"
                                textAlign="center"
                                textShadow="1px 1px 2px #000000"
                                    >TV'S</Heading>
                            <Text
                                color="--white-color"
                                fontFamily='--first-font'
                                fontWeight="semibold"
                                fontSize={["1.4rem", "1.7rem", "3rem"]}
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
                    <ListaTarjetas producto={producto}/>
            </Flex>
        </Box>
    )
}

export default SeccionTvs
