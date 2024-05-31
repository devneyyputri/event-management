'use client'

import Link from "next/link";
import useSWR from "swr";
import EventDiscovery from './../../components/EventDiscovery'
import {     Card,
  CardHeader,
  Center,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Flex,
 } from "@chakra-ui/react";
import  {useState } from "react";
import {getdata} from "../../../api/eventlist" 
import {useQuery, useIsFetching} from "@tanstack/react-query"

export default function eventlist(){
const myData = [] 
const {
  data = myData,
  isError,
  isSuccess,
  isLoading,
} = useQuery({
  queryKey: ["data"],
  queryFn: getdata,
});
if (isLoading) {

  return <h3> Loading ... </h3>;
}
if (isSuccess) {
  console.log(JSON.stringify(data))
  return (
   <>
    {data.data.map(item =>{
          
          return(
            <Flex>
            <Card maxW='400px' align={'center'} >
                <CardBody >
                  
                    <Image
                        src='event5.jpeg'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'/>
                    <Stack mt='6' spacing='3'>
                        <Heading m={1} size='md'>{item.title}</Heading>
                        <Text>
                           {item.description}
                        </Text>
                        <Text color='pink.400' fontSize='2xl'>
                           Price: {item.id}
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
            </Card>
            </Flex>
          
          
          )
          
          
        })}
   
   </>

  )
}
  if (isError) {
    console.log(data)
    return (
      <Center w= "100vw">
        Please Log in with a valid account
      </Center>
        
    );
    
}

}