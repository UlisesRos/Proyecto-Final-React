import {  Box, Image } from "@chakra-ui/react";
import '../../css/botonFav.css'
import heart from "../../img/favoritos/heart.png"
import heartColor from "../../img/favoritos/heartColor.png"


const BotonFav = ({fav, setFav, addToFav, deleteFromFav, prod }) => {

    const handleFav = () => {
        setFav(!fav);
    }


    return (

        <Box
        position="absolute"
        left={["156px","184px","198px"]}
        top="6px"
        p={["6px", "7px", "10px"]}
        borderRadius="100%"
        bg="rgba(203, 213, 224, 0.2)"
        onClick={() => addToFav(prod)} 
            >
                <Image src={ fav ? heart : heartColor} onClick={handleFav} className={fav ? "" : "botonFav"}
                borderRadius="100%"
                w="25px"
                h="25px"
                zIndex={10}
                _hover={{
                    cursor: "pointer"
                }}
                />
        </Box>
    )
}

export default BotonFav