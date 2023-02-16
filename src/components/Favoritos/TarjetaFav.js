import { Card, CardBody, Image, Heading, Text, Button, Link, Box, Flex } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useState } from "react";



const TarjetaFav = ({ prod, addToCart, deleteFromFav }) => {
    const [fav, setFav] = useState(true)    //estado para visualizar el boton de favorito con y sin color



    const modalCarrito = (prod) => {
        Swal.fire({
            title: prod.titulo,
            text: "Producto agregado correctamente",
            imageUrl: prod.img,
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })

        addToCart(prod)
    }
    const caracteristicas = (prod) => {
        Swal.fire({
            width: "500px",
            title: "Caracteristicas Generales",
            text: prod.caracteristicas
        })
    }

    return (
        <Card
        mt="5px"
        w="100%"
        h="max-content"
        boxShadow= "dark-lg"
        transition= "0.1s"
        display="flex"
        bg="--white-color"
        borderRadius="none"
        >
            <Link
                textAlign="center"
                _hover={{
                    bg:"--grey-light-color"
                }}
                borderRadius="50px"
                w="30px"
                h="30px"
                position="absolute"
                right="10px"
                top="5px"
                onClick={() => deleteFromFav(prod)}
                >
                    <Text>x</Text>
            </Link>
        <CardBody
            display="flex"
            flexDirection={["column","column","row"]}
            columnGap="40px"
            rowGap={["10px"]}
            justifyContent={"space-between"}
            alignItems="center"
            >
            <Image
                borderRadius="10px"
                src={prod.img}
                maxW="50%"
                h="130px"
                objectFit="cover"
            />
            <Box
            alignSelf="center"
            >
                <Heading
                    as="h4"
                    fontSize="1.25rem"
                    color="--backg-color"
                    fontFamily='--first-font'
                    fontWeight="extrabold"
                    py="5px"
                        >{prod.titulo}</Heading>

                <Text
                    fontSize="1.25rem"
                    color="--backg-color"
                    fontFamily='--first-font'
                    textOverflow="ellipsis"
                    fontWeight="semibold"

                        >$ {prod.precio}</Text>

            </Box>
            <Flex
                justifyContent="center"
                >
                <Button
                    onClick={() => modalCarrito(prod)}
                    borderRadius="20px"
                    color="--first-color"
                    bg="--backg-second-color"
                    _hover={{
                        boxShadow:"dark-lg",
                    }}
                    fontFamily="--second-font"
                    fontSize="1rem"
                    w="100px"
                    alignSelf="center"
                    mx={2}
                        >{prod.boton}</Button>

                <Link
                    alignSelf="center"
                    w="100px"
                    mx={2}
                    textAlign={"center"}
                    fontFamily="--second-font"
                    color="--backg-color"
                    fontWeight="bold"
                    _hover={{
                        color:"--third-color"
                    }}
                    onClick={() => caracteristicas(prod)}
                    >
                        Ver Detalles</Link>
            </Flex>
        </CardBody>
    </Card>
    )    

}

export default TarjetaFav