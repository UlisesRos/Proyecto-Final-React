import { Flex, Heading, Text } from "@chakra-ui/react";

const ShoppingModal = ({ toggle, isOpen }) => {
    return (
        <Flex
            mt="20px"
            w={["200px" ,"300px" ,"400px"]}
            h={["300px" ,"400px" ,"500px"]}
            zIndex="modal"
            position="absolute"
            right="10px"
            bg="--white-color"
            borderRadius="10px"
            flexDir="column"
            justify="space-evenly"
            align="center"
            rowGap="5px"
            onClick={toggle}
            display={isOpen ? "flex" : "none"}>
                <Heading
                    fontSize={["1rem", "1.5rem", "2rem"]}
                    color="--backg-color"
                    >
                    El carrito esta vacio.</Heading>
                <Text
                    fontSize={[".8rem", "1rem", "1.3rem"]}
                    color="--backg-color"
                    >Agregar productos al carrito</Text>
        </Flex>
    )
}

export default ShoppingModal
