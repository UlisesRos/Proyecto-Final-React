import { Card, CardBody, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

const TarjetaEscrtorio = (props) => {

    const [visible, setVisible] = useState(false)

    function over(e) {
        setVisible(true);
    }
    function out(e) {
        setVisible(false);
    }

    const modalCarrito = () => {
        Swal.fire({
            width: "500px",
            title: "¡Bien hecho!",
            text: "Producto agregado a su carrito",
            icon: "success"
        })
    }

    return (

            <Card
                w="250px"
                h="360px"
                _hover={{
                    h:"450px",
                    boxShadow: "dark-lg",
                }}
                transition= "0.1s"
                onMouseOver={over}
                onMouseOut={out}
                display={["none", "none", "block"]}
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
                        objectFit="cover"
                        />

                    <Heading
                        as="h3"
                        fontSize="1.5rem"
                        mt="30px"
                        color="#FFFFFF"
                        fontFamily="'Roboto', sans-serif"
                        fontWeight="extrabold"
                            >{props.prod.titulo}</Heading>

                    <Text
                        fontFamily="Roboto, sans-serif"
                        fontWeight="medium"
                        color="#FFFFFF"
                        textAlign="left"
                        mt="10px"
                        fontSize=".9rem"
                        textOverflow="ellipsis"
                        display={visible ? "inline" : "none"}
                            >{props.prod.descripcion}</Text>

                    <Text
                        fontWeight="semibold"
                        fontSize="1.25rem"
                        mt="10px"
                        color="#FFFFFF"
                        fontFamily="Roboto, sans-serif"
                        display={visible ? "inline" : "none"}
                        textAlign="left"
                            >{props.prod.precio}</Text>

                        <Button
                            onClick={() => modalCarrito()}
                            borderRadius="20px"
                            color="#AD4C6B"
                            bg="#FFFFFF"
                            _hover={{
                                boxShadow:"dark-lg",
                            }}
                            fontFamily="Nunito, sans-serif"
                            fontSize="1rem"
                            w="100px"
                            alignSelf="center"
                            mt="20px"
                            display={visible ? "inline" : "none"}
                                >{props.prod.boton}</Button>
                </CardBody>
            </Card>
    )
}

export default TarjetaEscrtorio
