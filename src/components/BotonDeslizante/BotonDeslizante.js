import { Link, Image } from "@chakra-ui/react"
import flechaArriba from "../../img/whatsapp/chevron-flecha-hacia-arriba.png"

const BotonDeslizante = () => {
    return (
        <Link
            display={["block", "block", "none"]}
            href="#"
            position="fixed"
            zIndex="1000"
            left="25px"
            bottom="20px"
            >
                <Image 
                    src={flechaArriba}
                    w="40px"/>
        </Link>
    )
}

export default BotonDeslizante
