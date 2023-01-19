import React from "react";
import { Box } from "@chakra-ui/react";
import shopping from "../../img/NavIconos/Shopping.png";


const ShoppingBoton = () => {
    return (
        <Box
        width={["45px", "50px", "55px"]}
        >
            <img className="hoverIcon" 
                style={{
                cursor: "pointer"
            }} src={shopping} alt="" />
        </Box>
    )
}

export default ShoppingBoton