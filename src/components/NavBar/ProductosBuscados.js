import { Box, Flex } from "@chakra-ui/react";

  const ProductosBuscados = ({children, openSearch, searchValue}) => {


return (
    <Flex
        justify="center"
        align="center"
        pt={openSearch ? "0px" : ["0px","0px","85px"]}
        display={searchValue === "" ? "none" : "block"}
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