import React from "react";
import { Box } from "@chakra-ui/react";
import shopping from "../../img/NavIconos/Shopping.png";


const ShoppingBoton = () => {
    return (
        <Box
        width={["39px", "44px", "50px","67"]}
        >
            <img style={{
                cursor: "pointer"
            }} src={shopping} alt="" />
        </Box>
    )
}

export default ShoppingBoton