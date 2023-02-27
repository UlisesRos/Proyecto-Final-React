import React from "react";
import { Box, Link, Button, Text, Drawer, DrawerBody, DrawerHeader ,DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Image } from "@chakra-ui/react";
import heartNav from "../../img/NavIconos/heartNav.png"
import { useRef } from "react";
import TarjetaFav from "./TarjetaFav";



const NavBotonFav = ({addToFav, favoritos, deleteFromFav, addToCart }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (

        <>
            <Link
                _hover={{ 
                            textDecoration: "none" ,
                        }}>
                <Button        
                    bg={['#331d4a','#331d4a', '#331d4a', '#504375']} 
                    variant='solid'
                    display="flex"
                    columnGap='5px'
                    px={['0px','0px','0px','12px']}
                    py={['16px','16px','16px','12px']}
                    mx={['0px','0px','0px','16px']}
                    fontSize={["20px", "20px", "20px", "16px"]}
                    letterSpacing="2px"
                    fontFamily= "--first-font"
                    fontWeight="600"
                    _hover={{bg: ["#331d4a80","#331d4a80","#331d4a80","#ad4c6b"]}}
                    ref={btnRef}
                    onClick={onOpen}
                    >
                        <Box><Image src={heartNav} alt=""
                        width={['34px','34px','34px','24px']}
                        /></Box>
                        <Box
                            display={["none", "none", "none", "block"]}
                            >
                            <Text mt={['0px','0px','0px','2px']}>Favoritos</Text>                      
                        </Box>
                </Button>
                <Drawer onClose={onClose} isOpen={isOpen} size='lg'>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader
                        fontFamily="--second-font"
                        fontSize="2rem"
                        fontWeight="bold"
                        >
                            Favoritos</DrawerHeader>
                    <DrawerBody>
                        {
                            favoritos.length === 0 
                            ?
                            <Text
                                h="60vh"
                                display="flex"
                                justifyContent="start"
                                alignItems="center"
                                fontFamily="--second-font"
                                fontSize="1.5rem"
                                fontWeight="bold"
                                >Agregar productos a favoritos</Text>
                            :
                            favoritos.map((prod, index) => <TarjetaFav key={index} prod={prod} addToFav={addToFav} deleteFromFav={deleteFromFav} addToCart={addToCart}/>)
                        }
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Link>
        </>

    )
    }

export default NavBotonFav