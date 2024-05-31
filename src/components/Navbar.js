import {
    Stack,
    Input,
    Box,
    Divider,
    HStack,
    Flex,
    Link
}
from "@chakra-ui/react"
import Logo from "./Logo"
import Menu from "./Menu"
import Image from "next/image"

export default function Navbar() {
    return (
        
            <Box w="100%" h="80px" bgGradient="linear(to-l,#7c87cf, #6d2d70)" borderWidth='1px' borderRadius='lg' overflow='hidden' >
            <HStack
                align='center'
                m={2}
                spacing={8}
                justify={["center","space-between", "flex-end", "flex-end" ]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}>  
                <Flex
                
                >

                            <div w={"50%"} style={{marginRight:20, marginBottom:40 }}>
                            <Link href={"/"}> 
                            <Image src='/home.svg' width={100} height={100} alt="home"/>
                             </Link>
                            </div>
                <Input marginRight={70} variant='outline' placeholder='Search'/>
                <Menu></Menu>

                </Flex>
            </HStack>
            </Box>
        
    )

}