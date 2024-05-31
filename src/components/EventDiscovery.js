import {
    Box,
    Flex,
    Grid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    Button,
    ButtonGroup,
    Link
    
} from "@chakra-ui/react"
import { BsBodyText } from "react-icons/bs"

export default function EventDiscovery(params) {
    const {title, body, id} = params
    return (
        
        <>  
        
            <Card maxW='sm'>
                
                <CardBody >
                    <Image
                        src='/event4.jpeg'
                        alt='event4'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading m={1} size='md'>{title}</Heading>
                        <Text>
                           {body}
                        </Text>
                        <Text color='pink.600' fontSize='2xl'>
                           Price: {id}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    
                    <ButtonGroup spacing='2'>
                        
                        <Button variant='solid' colorScheme='pink'>
                            About Event
                        </Button>
                    </ButtonGroup>
                    
                </CardFooter>
<Flex>
                <CardBody >
                    <Image
                        src='/event4.jpeg'
                        alt='event4'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading m={1} size='md'>{title}</Heading>
                        <Text>
                           {body}
                        </Text>
                        <Text color='pink.600' fontSize='2xl'>
                           Price: {id}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    
                    <ButtonGroup spacing='2'>
                        
                        <Button variant='solid' colorScheme='pink'>
                            Check Event
                        </Button>
                    </ButtonGroup>
                    
                </CardFooter>
             </Flex>
            </Card>
           

     
</>

    )

}