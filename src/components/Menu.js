import { Stack, MenuItem, Button, Box, Flex } from "@chakra-ui/react"
import NextLink from 'next/link'


export default function Menu() {
    return (
        <Flex >
        <Stack

            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}>
           
            <Button colorScheme="blackAlpha" variant={'outline'} as={NextLink} href='./../profile'>Profile</Button>
            <Button colorScheme="blackAlpha" variant={'outline'} as={NextLink} href='./../login'>Login</Button>
            <Button colorScheme="blackAlpha" variant={'outline'} as={NextLink} href='./../signup'>Sign up</Button> 
            <Button colorScheme="blackAlpha" variant={'outline'} size='md' as={NextLink} href='./../eventlist' >Find Event </Button>
            <Button colorScheme="blackAlpha" variant={'outline'} as={NextLink} href='./../createevent'>Create Event</Button>
            
        </Stack>
        </Flex>
    )

}