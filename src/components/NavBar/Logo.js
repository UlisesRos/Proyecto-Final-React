import React from "react";
import { Link } from "@chakra-ui/react";
import pineapple from "../../img/NavIconos/Pineapple.png";


const Logo = () => {
    return (
        <Link
        href="#"
        width={["50px", "55px", "58px","67"]}
        >
            <img className="hoverIcon"
                style={{
                cursor: "pointer"
            }}  src={pineapple} alt="" />
        </Link>
    )
}

export default Logo