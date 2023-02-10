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
    <button>
    <Image src={back} alt="back" className="hoverIcon"
        width={["45px", "70px", "70px"]} 
        cursor="pointer"
        type="reset"
        />
        </button>
    );


    const SearchToggle = ({ toggle, openSearch}) => { 
    
    return (
        <Box onClick={toggle}   //si isSearching es verdadero se muestra la lupa
        > 
            {openSearch ? <SearchIcon /> : <BackIcon />}
        </Box>
    );
    };

    const Buscador = ({searchValue, setSearchValue, openSearch, setOpenSearch }) => {

        const toggle = () => setOpenSearch(!openSearch);  //funcion manejadora de estado


        const onSearchValueChange = (event) => {  
             // trae el valor de entrada del input
                setSearchValue(event.target.value);
        }

        

    return (
        <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        columnGap="5px"
        >

            <Input
                type="search"
                autoFocus={true}
                placeholder="Search..."
                padding="0 0 10px 10px"
                variant='unstyled'
                border="none"
                outline="none"
                borderRadius="none"
                borderBottom="1px solid grey"
                size="lg"
                className={openSearch ? "close" : "open"}  //si isSearching es verdadero la clase sera close que oculta el input
                value={searchValue}
                onChange={ onSearchValueChange}
            />

           <SearchToggle toggle={toggle} openSearch={openSearch}  //Searchtoogle intercambia el boton de lupa y el de back
            />
    
        </Box>
        )
    }

export default Buscador