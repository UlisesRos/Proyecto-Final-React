import { Box, Card, CardBody, Image, Heading, Text, CardFooter, Button} from "@chakra-ui/react";
import TarjetaEscrtorio from "./TarjetaEscrtorio";
import Swal from "sweetalert2";


const TarjetaMobile = (props) => {

    const modalCarrito = () => {
        Swal.fire({
            width: "400px",
            title: "¡Bien hecho!",
            text: "Producto agregado a su carrito",
            icon: "success"
        })
    }

    return (
        <Box
            >
            <TarjetaEscrtorio prod={props.prod}/>

        <Card 
            maxW={["200px", "230px" ,"230px"]}
            display={["block", "block", "none"]}
            justify="center"
            align="center"
            bg="rgba(80, 67, 117, .8)"
            >
            <CardBody
                display="flex"
                flexDirection="column"
                justify="center"
                align="center"
                >
                <Image
                    src={props.prod.img}
                    maxW="100%"
                    h="auto"
                    alignSelf="center"
                    />

                <Heading
                    as="h3"
                    fontSize="1.4rem"
                    mt="30px"
                    color="#FFFFFF"
                    fontFamily="'Roboto', sans-serif"
                    fontWeight="semibold"
                    >{props.prod.titulo}</Heading>
                <Text
                    fontWeight="semibold"
                    fontSize="1.25rem"
                    mt="20px"
                    color="#FFFFFF"
                    fontFamily="Roboto, sans-serif"
                    >{props.prod.precio}</Text>

            </CardBody>
            <CardFooter
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Button
                    onClick={() => modalCarrito()}
                    borderRadius="20px"
                    h="2rem"
                    w="5rem"
                    color="#AD4C6B"
                    bg="#FFFFFF"
                    _hover={{
                        boxShadow:"dark-lg",
                    }}
                    fontFamily="Nunito, sans-serif"
                    fontSize="1rem"
                    >{props.prod.boton}</Button>
            </CardFooter>
        </Card>
        </Box>

    )
}

export default TarjetaMobile
