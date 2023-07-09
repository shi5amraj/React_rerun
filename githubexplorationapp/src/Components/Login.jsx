import React from 'react';
import "./Login.css"
import {
   
    Input,
    Container,
    Stack,
    Heading,
    Button,
    Text,
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import loginActionCreator from './ActionCreators/loginActionCreator';
import { useState } from 'react';

import axios from "axios";
import userDetailActionCreator from './ActionCreators/userDetailActionCreater';
import { useRef } from 'react';
import userLogoutActionCreater from './ActionCreators/userLogoutActionCreator';

const Login = () => {

    const [userName,setUserName]=useState("");
   
 const dispatch=useDispatch();
 const objRef = useRef(null);




const login=()=>
{

 axios.get(`https://api.github.com/users/${userName}`).then((resp)=>{

   dispatch(userDetailActionCreator(resp.data));

    objRef.current=resp.data
    dispatch(loginActionCreator());
 
 
 }).catch(()=>{
    alert("User is not registered with git repo");
    dispatch(userLogoutActionCreater());
 })

}


  return (
    <div className='logincontainer'>

        <div className='loginForm'>
       <Container>
        <Heading color="white" mb={4}>LOGIN</Heading>
       <Stack spacing={6}>
  <Input variant='filled' placeholder='Username' onChange={(e)=>setUserName(e.target.value)} />
  <Input variant='filled' placeholder='Password' type="password" />
  <Button colorScheme='teal' onClick={login}>Login</Button>
</Stack>
<Stack mt={3} direction="row" spacing={6} align="center" justify="center">
    <Text>Forgot Password</Text>
    <Text>Help</Text>
</Stack>

       </Container>

        </div>

    </div>
  )
}

export default Login