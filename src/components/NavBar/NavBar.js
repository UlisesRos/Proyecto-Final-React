import React, { useState } from "react";
import { Link, Box, Flex, Stack } from "@chakra-ui/react";
import Buscador from "./Buscador";
import BotonShopping from "./ShoppingBoton";
import Logo from "./Logo";
import menu from "../../img/NavIconos/menu.png";
import close from "../../img/NavIconos/close.png"


    const MenuIcon = () => ( //menu hamburguesa icono
        <img src={menu} alt="Menu" title="Menú" width={["29px", "34px", "34px"]} />
    );

    const CloseIcon = () => ( //close menu hamburguesa icono
        <img src={close} alt="close" title="close" width={["29px", "34px", "34px"]} />
    );


    const MenuToggle = ({ toggle, isOpen}) => { 
    return ( //entre sm y md es visible el icono menu, si isOpen es verdadero es visible el boton close
            <Box display={{ base: "block", md: "none" }} onClick={toggle}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </Box>
    );
};

    const MenuLinks = ({ isOpen }) => {
    return (
        <Box  display={{ base: isOpen ? "block" : "none", md: "block" }}
        //MenuLinks es visible si estamos en los breakpoints md/lg o si isOpen es true
        //si isOpen es true es visible el segundo llamado de MenuLinks
        >
            <Stack
                spacing={7}
                align="center"
                direction={["column", "column", "row"]}   //entre sm y md los links se agrupan en columnas (menu hamburguesa)
                p={[6, 6, 0, 0]}                          //entre md/lg se agrupan en fila (antes de que aparezca el menu hamburguesa)
                fontSize={["24px", "24px", "20px", "20px"]}
                letterSpacing="2px"
                color={["#331D4A", "#331D4A", "white", "white"]}
            >
                <Link href="/">Destacados</Link>
                <Link href="/">SmartPhone</Link>
                <Link href="/">TV</Link>
                <Link href="/">Audio</Link>
                <Link href="/">Nosotros</Link>
            </Stack>
        </Box>
    );
};

    const NavBar = () => {  //Componente NavBar principal
        
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);  //funcion manejadora de estado

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                w="100%"
                p={6}
                background="#331D4A"
                color="white"
                wrap="wrap"
            >
                <Logo/>

                <Box       
                display="flex" 
                alignItems="center"
                >
                    <Box
                    display={["flex", "flex", "none", "none"]}
                    px="20px"
                    >
                        <Buscador />
                        <BotonShopping/>
                    </Box>
                    <MenuToggle toggle={toggle} isOpen={isOpen} //toogle intercambia el boton de menu y el de close
                    /> 
                    <MenuLinks  //solo visible entre md y lg
                    /> 
                </Box>

                <Box  //se llama dos veces este box ya que la version mobile y la de escritorio intercambian sus lugares 
                        //el menu con el buscador y el boton
                display={["none", "none", "flex", "flex"]}
                >
                    <Buscador />
                    <BotonShopping/>
                </Box>
            </Flex>

            <Box 
            display={["block", "block", "none", "none"]}
            borderBottom="2px solid"
            borderBottomColor="#331D4A"
            >
                <MenuLinks isOpen={isOpen}  //MenuLinks dentro del menu hambuerguesa, visible cuando isOpen es true entre sm y md
                />                         
            </Box>
        </>
    );
};

export default NavBar;
