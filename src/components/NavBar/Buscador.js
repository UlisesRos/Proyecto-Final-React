import React from "react";
import { Box } from "@chakra-ui/react";
import search from "../../img/NavIconos/Search.png";
    

const Buscador = () => {
    return (
        <Box
        width={["39px", "44px", "50px","67"]}
        >
            <img style={{
                cursor: "pointer"
            }} src={search} alt="" />
        </Box>  
    )
}

export default Buscador