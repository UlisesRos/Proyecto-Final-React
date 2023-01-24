import { Box, Flex } from "@chakra-ui/react";

  const ProductosBuscados = ({children}) => {


return (
    <Flex           
        justify="center"
        align="center"    
        >
        <Box
            display="block"
            justifyItems="center"
            w={"100%"}
            >
            {children}
        </Box>

    </Flex>
  )
}

  export default ProductosBuscados