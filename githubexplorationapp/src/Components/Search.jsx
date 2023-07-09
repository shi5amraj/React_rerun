import React from 'react';
import "./Home.css";
import { Card, Box, Flex, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import userDataActionCreator from './ActionCreators/userDataActionCreator';
import { useState } from 'react';
import updatedUserDataActionCreator from './ActionCreators/updatedUserDataActionCreator';
import { useNavigate, useParams } from 'react-router-dom';
import searchedDataActionCreator from './ActionCreators/searchedDataActionCreator';



const Search = () => {

    const dispatch = useDispatch();

    const { username}= useParams();

    


    useEffect(() => {
       axios.get(`https://api.github.com/users/${username}`).then((resp)=>{
            console.log("searched data",resp.data);
           const searchedarr=[];
            searchedarr.push(resp.data);
        dispatch(searchedDataActionCreator(searchedarr));
       }).catch(()=>{

       })

        
      },[username]);


  const searchedUserData= async (user)=>{


    try {
        const response = await axios.get(user.url);
        const userDetails = response.data;
        return {
          articles: userDetails.public_repos,
          followers: userDetails.followers,
          following: userDetails.following,
        };
      } catch (error) {
        console.error(`Error fetching details for user ${user.login}:`, error);
        return {
          articles: 0,
          followers: 0,
          following: 0,
        };
      }



  }


  
  
    

   


    const userData = useSelector((storeData) => {
        return storeData.searchedData;

    })

 

return (

    <div className='homecontainer'>

        {userData.map((elem) => {

            return (


                <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' padding="0.5rem" maxH="225px" maxW="400px">

                    <Image objectFit='cover' borderRadius="5px"
                        maxW={{ base: '100%', sm: '150px' }}
                        src={elem.avatar_url
                        }
                        alt='Caffe Latte'
                    />

                    <Stack >
                        <CardBody>
                            <Heading size='sm'>{elem.login}</Heading>

                            <Text py='1' maxH="50px">
                                following otherusers
                            </Text>
                        </CardBody>

                        <CardFooter maxW="350px" >
                            <Card bg="lightgrey" size="sm" w="full" maxH="200px">
                                <CardBody>
                                    <Flex justifyContent="space-between">
                                        <Box mx={1}>
                                            <Text fontSize="xs" fontWeight="bold">Article</Text>
                                            <Text>{elem.public_repos}</Text>
                                        </Box>
                                        <Box mx={1}>
                                            <Text fontSize="xs" fontWeight="bold">Follower</Text>
                                            <Text>{elem.followers}</Text>
                                        </Box>
                                        <Box mx={1}>
                                            <Text  fontSize="xs" fontWeight="bold">Following</Text>
                                            <Text>{elem.following}</Text>
                                        </Box>
                                    </Flex>
                                </CardBody>
                            </Card>
                        </CardFooter>
                    </Stack>
                </Card>
            )


        })}




    </div>
)
}

export default Search;