import React from 'react';

import {Link, useNavigate} from "react-router-dom";
import "./Navbar.css"
import {
   
    Input,
    Stack,
    Heading,
    Button,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,ModalHeader,ModalBody,ModalFooter
  } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import userDataActionCreator from './ActionCreators/userDataActionCreator';
import updatedUserDataActionCreator from './ActionCreators/updatedUserDataActionCreator';
import userLogoutActionCreater from './ActionCreators/userLogoutActionCreator';

const Navbar = () => {

    const [username,setUserName]=useState("");

    const [showModal, setShowModal] = useState(false);

    const dispatch=useDispatch();

    
    const navigate= useNavigate();

 const searchUser=()=>{
   
    navigate(`/search/${username}`)

 }

 const handleLogout = () => {
    setShowModal(true);
  };

  const handleModalConfirm = () => {
   
   dispatch(userLogoutActionCreater());
   navigate("/")
    setShowModal(false);
  };

  const handleModalClose = () => {
    // Close the modal without performing any action
    setShowModal(false);
  };





  return (
    <div className='navbarcontainer'>
    <div className='navbarleftcontainer'>
  <Heading type="sm">GITHUB EXPLORATION</Heading>
    </div>
    <div className='navbarrightcontainer'>
        <Stack direction="row" spacing={3} align="center" justify="center">
            <Input fontSize='1.2em' fontWeight="bold" variant='filled' onChange={(e)=>{setUserName(e.target.value)}}/>
            <Button colorScheme='green' onClick={searchUser}>Search</Button>
             </Stack>
        <Link to="/profile">Profile</Link>
        <Link to="/">Home</Link>
        <Button onClick={handleLogout} >Logout</Button>

        <Modal isOpen={showModal} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logout Confirmation</ModalHeader>
          <ModalBody>
            <Text>Do you really want to logout?</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={handleModalConfirm}>
              Yes
            </Button>
            <Button variant='ghost' onClick={handleModalClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>

    </div>
  )
}

export default Navbar