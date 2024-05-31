import React from "react"
import { Flex, Center, Image, Box} from "@chakra-ui/react"

export default function HomeBanner() {
    return (
        <Flex m={2} color='blue'>

            <Box  flex='1' boxSize='auto'  >
                <Image 
                    src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='homepage'/>
            </Box>
        </Flex>
    )
}