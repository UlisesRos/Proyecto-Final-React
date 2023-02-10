import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/button'


const BotonPayment = () => {

return (
    <nav>
        <ul >
            <li style={{display:"flex", justifyContent:"right"}}>
            <Link 
                to="/">
                <Button
                    fontWeight="bold"
                    fontFamily="--second-font"
                    bg="--backg-second-color"
                    color="--white-color"
                    fontSize="1.5rem"
                    w="320px"
                    _hover={{
                        bg: "--backg-second-color"
                    }}
                    >
                    Volver al Incio
                </Button>
            </Link>
            </li>
        </ul>
    </nav>
)
}

export default BotonPayment