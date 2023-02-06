import { Link, Button, Text,   Drawer, DrawerBody, DrawerHeader ,DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import heartNav from "../../img/NavIconos/heartNav.png"
import { useRef } from "react";
import TarjetaFav from "./TarjetaFav";



const NavBotonFav = () => {

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
                    px='12px'
                    py={['16px','16px','16px','12px']}
                    mx='16px'
                    fontSize={["20px", "20px", "20px", "16px"]}
                    letterSpacing="2px"
                    fontFamily= "--first-font"
                    fontWeight="600"
                    _hover={{bg: ["#331d4a80","#331d4a80","#331d4a80","#ad4c6b"]}}
                    ref={btnRef}
                    onClick={onOpen}
                    >
                        <div><img src={heartNav} alt="" /></div>
                        <div>
                            <Text mt={['0px','0px','0px','2px']}>Favoritos</Text>
                        </div>                       
                </Button>
                <Drawer onClose={onClose} isOpen={isOpen} size='lg'>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>keee</DrawerHeader>
                    <DrawerBody>
                        {/*{
                            favoritos.map((prod, index) => <TarjetaFav key={index} prod={prod} addToFav={addToFav}/>)
                        }*/}
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Link>
        </>

    )
    }

export default NavBotonFav