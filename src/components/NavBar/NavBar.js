import React, { useState,  } from "react";
import { Link, Box, Flex, Stack } from "@chakra-ui/react";
import '../../css/navBar.css'
import Buscador from "./Buscador";
import BotonShopping from "./ShoppingBoton";
import Logo from "./Logo";
import ProductosBuscados from "./ProductosBuscados";
import TarjetaBuscador from "./TarjetaBuscador";
import NavBotonFav from "../Favoritos/NavBotonFav";

    const MenuToggle = ({ toggle }) => { 
    return ( //entre sm y lg es visible el icono menu, si isOpen es verdadero es visible el boton close
            <Box display={{ base: "block", lg: "none" }} onClick={toggle} >
                <label  className="botonMenu">
                    <input type="checkbox" className="check" onInput={toggle} />
                    <span></span>
                </label>
            </Box>
    );
};

    const MenuLinks = ({ isOpen }) => {

    return (
        <Box  
            display={{ base: isOpen ? "block" : "none", lg: "block" }}  //MenuLinks es visible si estamos en los breakpoints md/lg o si isOpen es true, si isOpen es true es visible el segundo llamado de MenuLinks
            >
            <Stack
                spacing={[0, 0, 0, 6]}
                align="center"
                direction={["column", "column", "column", "row"]}   //entre sm y lg los links se agrupan en columnas (menu hamburguesa) a partir de lg se agrupan en fila (antes de que aparezca el menu hamburguesa)
                fontSize={["22px", "22px", "22px", "18px"]}
                letterSpacing="2px"
                color="white"
                fontFamily= "--first-font"
                fontWeight="600"
                textDecoration={'none'}
                _hover={{ textDecoration: "none" }}
                className="stackIn"
                >
                <Link href="#SeccionDestacados" className="links" >Destacados</Link> 
                <Link href="#SeccionSmartphone" className="links" >SmartPhone</Link>
                <Link href="#SeccionTvs" className="links" >TV</Link>
                <Link href="#SeccionAudio" className="links" >Audio</Link>
                <Link href="#SeccionNosotros" className="links" >Nosotros</Link>           
            </Stack>
        </Box>
    );
};

    const NavBar = ({ producto, addToCart, deleteFromCart, deleteFromFav, clearCart, addToFav }) => {  //Componente NavBar principal
        
        const objetoBuscador = producto.productosSmartphone.concat(producto.productosTvs, producto.productosAudio, producto.productosDestacados)

        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);  //funcion manejadora de estado

        //Funcion manejadora de estado para el buscador
        const [openSearch, setOpenSearch] = useState(true);
        const [searchValue, setSearchValue] = useState('');
        let searchedProd = [];
        if (!searchValue.length >= 1 || openSearch) {
            searchedProd = []                                   //sino hay caracteres en el input devuelve el array vacio
        } else {
            searchedProd = objetoBuscador.filter(prod => {
                const prodName = prod.titulo.toLowerCase();     //const que guarda los titulos de cada producto
                let searchText = searchValue.toLowerCase();   //const que guarda el valor que entra por input
                return prodName.includes(searchText);           //se retornan los productos que coincidan con la entrada
            });
        }

        const { carrito, favoritos } = producto

    return (
        
        <>
            <Flex
                as="nav"
                alignItems="center"
                justify={["space-around","space-around","space-between", "space-between"]}
                columnGap={["100px","200px","180px", "0px"]}
                wrap= {["wrap", "wrap", "nowrap", "nowrap"]}
                w="100%"
                p={3}
                bg="--backg-color"
                color="white"
                rowGap="15px"
                position={["initial", "initial", "fixed"]}
                zIndex="2"
                >
                <Logo />  
                <Box       
                    display="flex" 
                    alignItems="center"
                    >
                    
                    <Box    //este box se ve cuando  cuando aparece el menu hambuerguesa
                        display={["flex", "flex", "flex", "none"]} 
                        px="5px"
                        alignItems= "center"
                        >
                        <NavBotonFav favoritos={favoritos} addToFav={addToFav} deleteFromFav={deleteFromFav} addToCart={addToCart} /> 
                        <Buscador searchValue={searchValue} setSearchValue={setSearchValue} openSearch={openSearch} setOpenSearch={setOpenSearch} />
                        <BotonShopping carrito={carrito} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart}/>
                    </Box>

                    <MenuToggle toggle={toggle} //toogle intercambia el boton de menu y el de close
                    /> 
                    <MenuLinks addToFav={addToFav} favoritos={favoritos}  //solo visible entre md y lg
                    /> 
                    <Box display={["none", "none", "none", "flex"]}>
                        <NavBotonFav favoritos={favoritos} addToFav={addToFav} deleteFromFav={deleteFromFav} addToCart={addToCart} />
                    </Box>
                </Box>
                <Box  //se llama dos veces este box ya que la version mobile y la de escritorio intercambian sus lugares 
                    //el menu con el buscador y el boton, este box se ve antes que aparezca el menu hamburguesa
                    display={["none", "none", "none", "flex"]}
                    alignItems="center"
                    >
                    <Buscador searchValue={searchValue} setSearchValue={setSearchValue} openSearch={openSearch} setOpenSearch={setOpenSearch}/>
                    <BotonShopping carrito={carrito} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart}/>
                </Box>
            </Flex>

            <Box 
                display={["block", "block", "block", "none"]}
                borderBottom="2px solid"
                borderBottomColor="--backg-color"
                bg="--backg-second-color"
                >
                <MenuLinks isOpen={isOpen}  //MenuLinks dentro del menu hambuerguesa, visible cuando isOpen es true entre sm y md
                />                         
            </Box>
            <ProductosBuscados producto={producto} openSearch={openSearch} searchValue={searchValue}>
                {
                searchedProd.map(prod => (<TarjetaBuscador key={ prod.id } prod={ prod } addToCart={addToCart}/>))
                }
            </ProductosBuscados>
        </>
            );
};

export default NavBar;