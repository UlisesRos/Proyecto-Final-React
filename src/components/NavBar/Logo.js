import React from "react";
import { Box } from "@chakra-ui/react";
import pineapple from "../../img/NavIconos/Pineapple.png";


const Logo = () => {
    return (
        <Box
        width={["50px", "55px", "58px","67"]}
        >
            <img style={{
                cursor: "pointer"
            }}  src={pineapple} alt="" />
        </Box>
    )
}

export default Logo