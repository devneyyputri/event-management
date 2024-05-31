'use client'

import {
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormHelperText
} from '@chakra-ui/react'

import { login} from "../../../api/auth"

import { useState } from 'react'
import {useMutation} from "@tanstack/react-query"
import { useRouter } from 'next/navigation'





export default function Loggingin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (data) => {

      const res =  await login(data)
      return res

    },
    onSuccess: (data, variables, context) => {
      console.log(data)
      router.push("/profile");
    },
    onError:(err, variables, context) => {
      
      console.log(JSON.stringify(err));

    },
  });

  const handleLoginSubmit = (e) => {
    loginMutation.mutate({
      email: email,
      password: password,
    });
  };

  return (
    
    <div className="flex justify-center items-center">
      <Card h={"50%"} w={"70%"} className="max-w-1/2">
        <CardHeader className="">
          <Heading colorScheme='purple' fontStyle={'mono'} textTransform='uppercase' className="text-2xl">Login</Heading>
        </CardHeader>
        <hr></hr>
        <CardBody>
          <FormControl className="mb-5">
            <FormLabel> Email </FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText>{email}</FormHelperText>
          </FormControl>
          <FormControl className="mb-5">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl className="text-center">
            <Button
              type="button"
              colorScheme="pink"
              className="w-full"
              
              onClick={() => handleLoginSubmit()}
            >
              {" "}
              Login{" "}
            </Button>
          </FormControl>
          <Footer/>
        </CardBody>
      </Card>
    </div>
    
  );
}