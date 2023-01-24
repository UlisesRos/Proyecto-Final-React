import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import ShoppingTarjeta from "./ShoppingTarjeta";

const ShoppingModal = ({ carrito, isOpen, addToCart, deleteFromCart, clearCart }) => {


    return (
        <Flex
            mt="20px"
            w="300px"
            h="400px"
            zIndex="modal"
            position="absolute"
            right="5px"
            bg="--white-color"
            borderRadius="10px"
            flexDir="column"
            justify={carrito.length === 0 ? "space-evenly" : "space-between"}
            align="center"
            rowGap="5px"
            display={isOpen ? "flex" : "none"}>
                <Heading
                    fontFamily="--second-font"
                    fontSize={["1rem", "1.5rem", "1.5rem"]}
                    color="--backg-color"
                    display={carrito.length === 0 ? "block" : "none"}
                    >
                    El carrito esta vacio.</Heading>
                <Text
                    fontWeight="bold"
                    fontFamily="--second-font"
                    fontSize={[".8rem", "1rem", "1rem"]}
                    color="--backg-color"
                    display={carrito.length === 0 ? "block" : "none"}
                    >Agregar productos al carrito</Text>
                <Box
                    w="100%"
                    display="flex"
                    flexDir="column"
                    overflow={carrito.length === 0 ? "none" : "scroll"}
                    >
                    {
                        carrito.map((prod, index) => <ShoppingTarjeta key={index} prod={prod} deleteFromCart={deleteFromCart} addToCart={addToCart}/>)
                    }
                </Box>
                <Box
                    mb="10px"
                    display={carrito.length === 0 ? "none" : "flex"}
                    justifyContent="space-around"
                    alignItems="center"
                    p="5px"
                    w="100%"
                    color="--backg-color"
                    >
                    <Flex
                        columnGap="10px">
                        <Text
                            fontFamily="--second-font"
                            fontWeight="bold"
                            color="--backg-color"
                            >Total:
                        </Text>
                        <Text
                            fontFamily="--second-font"
                            fontWeight="bold"
                            color="--backg-color"
                            >{(carrito.reduce((ac, prod) => ac + prod.precioT, 0).toFixed(2))}
                        </Text>
                    </Flex>
                    <Button
                        fontWeight="bold"
                        fontFamily="--second-font"
                        bg="--grey-light-color"
                        fontSize="0.9rem"
                        w="110px"
                        color="--backg-color"
                        onClick={clearCart}
                        >
                        Limpiar Carrito
                    </Button>
                </Box>
        </Flex>
    )
}

export default ShoppingModal
