import { useState } from "react";
import { Box, Image, Input } from "@chakra-ui/react";
import search from "../../img/NavIconos/Search.png";
import back from "../../img/NavIconos/volver.png";
import '../../css/buscador.css'


    const SearchIcon = () => ( //icono lupa
    <Image src={search} alt="Menu" className="hoverIcon"
        width={["45px", "50px", "55px"]}
        cursor="pointer"
        />
    );

    const BackIcon = () => ( //icono para volver al estado inicial del buscador
    <Image src={back} alt="back" className="hoverIcon"
        width={["45px", "70px", "70px"]} 
        cursor="pointer"
        />
    );


    const SearchToggle = ({ toggle, isSearching}) => { 

    return (
        <Box onClick={toggle}   //si isSearching es verdadero se muestra la lupa
        > 
            {isSearching ? <SearchIcon /> : <BackIcon />}
        </Box>
    );
    };

    const Buscador = ({searchValue, setSearchValue}) => {

        const [isSearching, setIsSearching] = useState(true)
        const toggle = () => setIsSearching(!isSearching);  //funcion manejadora de estado


        const onSearchValueChange = (event) => {  
            setSearchValue(event.target.value); // guarda el valor de entrada del input
        };

    return (
        <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        columnGap="5px"
        >

            <Input
                type="text"
                autoFocus={true}
                placeholder="Search..."
                padding="0 0 10px 10px"
                variant='unstyled'
                border="none"
                outline="none"
                borderRadius="none"
                borderBottom="1px solid grey"
                size="lg"
                className={isSearching ? "close" : "open"}  //si isSearching es verdadero la clase sera close que oculta el input
                value={searchValue}
                onChange={onSearchValueChange}
            />

           <SearchToggle toggle={toggle} isSearching={isSearching} //Searchtoogle intercambia el boton de lupa y el de back
            />
    
        </Box>
        )
    }

export default Buscador