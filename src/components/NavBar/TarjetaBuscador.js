import { Card, CardBody, Image, Heading, Text, Button, Link, Box, Flex } from "@chakra-ui/react";
import Swal from "sweetalert2";


const TarjetaBuscador = (props) => {

    const modalCarrito = (prod) => {
        Swal.fire({
            title: prod.titulo,
            text: "Producto agregado correctamente",
            imageUrl: prod.img,
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })
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
        w="100%"
        h="max-content"
        boxShadow= "dark-lg"
        transition= "0.1s"

        display="flex"
        bg="--white-color"
        borderRadius="none"

        >
        <CardBody
            display="flex"
            flexDirection={["column","column","row"]}
            columnGap="40px"
            rowGap={["10px"]}
            justifyContent={"space-between"}
            align="center"
            alignItems="center"
            px={["10px", "10px", "80px"]}
            >
            <Image
                borderRadius="10px"
                src={props.prod.img}
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
                        >{props.prod.titulo}</Heading>

                <Text
                    fontFamily="--first-font"
                    fontWeight="semibold"
                    color="--backg-color"
                    fontSize=".9rem"
                    py="5px"
                        >{props.prod.descripcion}</Text>

                <Text
                    fontSize="1.25rem"
                    color="--backg-color"
                    fontFamily='--first-font'
                    textOverflow="ellipsis"
                    fontWeight="semibold"
                        >$ {props.prod.precio}</Text>

            </Box>
            <Flex
                justifyContent="center"
                >
                <Button
                    onClick={() => modalCarrito(props.prod)}
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
                        >{props.prod.boton}</Button>

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
                    onClick={() => caracteristicas(props.prod)}
                    >
                        Ver Detalles</Link>
            </Flex>
        </CardBody>
    </Card>
    )
}

export default TarjetaBuscador