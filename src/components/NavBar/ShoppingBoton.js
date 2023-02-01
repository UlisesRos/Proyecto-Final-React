import React from "react";
import { Box } from "@chakra-ui/react";
import shopping from "../../img/NavIconos/Shopping.png";
import { useState } from "react";
import ShoppingModal from "./ShoppingModal";
import { Text, Flex } from "@chakra-ui/react";


const ShoppingBoton = ({ carrito, addToCart, deleteFromCart, clearCart }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Box
        width={["45px", "50px", "55px"]}
        >
            <Flex>
                <img
                    onClick={toggle}
                    display={isOpen ? "block" : "none"}
                    className="hoverIcon" 
                    style={{
                    cursor: "pointer"
                }} src={shopping} alt="" />
                <Box
                    border="1px solid black"
                    h="20px"
                    display={carrito.length > 0 ? "flex" : "none"}
                    alignItems="center"
                    borderRadius="20px"
                    bg="red"
                    position="relative"
                    right="20px"
                    >
                    <Text
                        fontSize="0.8rem"
                        fontFamily="--second-font"
                        p="4px"
                        fontWeight="bold"
                        >
                        {
                            carrito.length
                        }
                    </Text>
                </Box>

            </Flex>
            <Box
                >
                <ShoppingModal isOpen={isOpen} carrito={carrito} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart}/>
            </Box>
        </Box>
    )
}

export default ShoppingBoton