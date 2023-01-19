import { Box, Card, CardBody, Image, Heading, Text, CardFooter, Button, Link } from "@chakra-ui/react";
import TarjetaEscrtorio from "./TarjetaEscrtorio";
import Swal from "sweetalert2";


const TarjetaMobile = ({ prod, addToCart}) => {

    const modalCarrito = (prod) => {
        Swal.fire({
            width: "300px",
            title: prod.titulo,
            text: "Producto agregado correctamente",
            imageUrl: prod.img,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    
        addToCart(prod.id)
    }
    const caracteristicas = (prod) => {
        Swal.fire({
            width: "300px",
            title: "Caracteristicas Generales",
            text: prod.caracteristicas
        })
    }

    return (
        <Box
            >
            <TarjetaEscrtorio prod={prod} addToCart={addToCart}/>

        <Card 
            maxW={["200px", "230px" ,"230px"]}
            display={["block", "block", "none"]}
            justify="center"
            align="center"
            bg="--white-color"
            >
            <CardBody
                display="flex"
                flexDirection="column"
                justify="center"
                align="center"
                >
                <Image
                    borderRadius="10px"
                    src={prod.img}
                    alt={prod.alt}
                    maxW="100%"
                    h="auto"
                    alignSelf="center"
                    />

                <Heading
                    as="h3"
                    fontSize="1.4rem"
                    mt="30px"
                    color="--backg-color"
                    fontFamily="--first-font"
                    fontWeight="semibold"
                    >{prod.titulo}</Heading>
                <Text
                    fontWeight="semibold"
                    fontSize="1.25rem"
                    mt="20px"
                    color="--backg-color"
                    fontFamily="--first-font"
                    >$ {prod.precio}</Text>

            </CardBody>
            <CardFooter
                mt="-20px"
                display="flex"
                flexDir="column"
                justifyContent="center"
                alignItems="center">
                <Button
                    onClick={() => modalCarrito(prod)}
                    borderRadius="20px"
                    h="2rem"
                    w="5rem"
                    color="--first-color"
                    bg="--backg-second-color"
                    _hover={{
                        boxShadow:"dark-lg",
                    }}
                    fontFamily="--second-font"
                    fontSize="1rem"
                    >{prod.boton}</Button>

                <Link
                        textAlign="center"
                        w="100px"
                        fontFamily="--second-font"
                        color="--backg-color"
                        fontWeight="bold"
                        mt="10px"
                        _hover={{
                            color:"--third-color"
                        }}
                        onClick={() => caracteristicas(prod)}
                        >
                            Ver Detalles</Link>
            </CardFooter>
        </Card>
        </Box>

    )
}

export default TarjetaMobile

