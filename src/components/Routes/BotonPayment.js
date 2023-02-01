import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '@chakra-ui/button'

const BotonPayment = () => {
  return (
    <nav>
        <ul>
            <li style={{display:"flex", justifyContent:"right"}}>
            <Link to="/PaymentForm"><Button
                        fontWeight="bold"
                        fontFamily="--second-font"
                        bg="--grey-light-color"
                        fontSize="0.9rem"
                        w="110px"
                        color="--backg-color"
                        >
                        Pagar
                    </Button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default BotonPayment