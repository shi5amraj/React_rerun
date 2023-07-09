import React from 'react';
import "./UserProfile.css";
import { Card, Box, Flex, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import userDataActionCreator from './ActionCreators/userDataActionCreator';
import { useState } from 'react';
import updatedUserDataActionCreator from './ActionCreators/updatedUserDataActionCreator';
import { useNavigate, useParams } from 'react-router-dom';
import searchedDataActionCreator from './ActionCreators/searchedDataActionCreator';



const UserProfile = () => {

    const dispatch = useDispatch();

    const[repo,setRepo]=useState([]);

   const username=useSelector((storedData)=>{
      
    return storedData.profileData.login
    ;

   })

    useEffect(() => {

        
       axios.get(`https://api.github.com/users/${username}`).then((resp)=>{
            console.log("searched data",resp.data);
            const searchedarr=[];
            searchedarr.push(resp.data);
        dispatch(searchedDataActionCreator(searchedarr));
       }).catch(()=>{

       })

       axios.get(`https://api.github.com/users/${username}/repos`).then((resp)=>{

       console.log(resp.data)
       setRepo(resp.data);


       }).catch(()=>{})

        
      },[username]);

    

  


    const userData = useSelector((storeData) => {
        return storeData.searchedData;

    })

    const handleViewProfile=(login)=>
{

    const externalUrl = `https://github.com/${login}`; 
    window.open(externalUrl, '_blank');


}


const handleViewRepo=(reponame)=>
{

    const externalUrl = `https://github.com/${reponame}`; 
    window.open(externalUrl, '_blank');


}

 

return (

    <div className='profilecontainer'>

        {userData.map((elem) => {

            return (


                <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' padding="0.5rem" maxH="250px" maxW="400px">

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
                         <Button onClick={()=>{handleViewProfile(elem.login)}}>View Profile</Button>

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

        <Heading>Repositories({repo.length})</Heading>


      {

     repo.map((elem)=>{

     return(
       <div className='repocard'>
          <div className='repocardleftdiv'>
           <Stack direction='row' >
            
            <Text>{elem.name}</Text>
            <Button type='xs' borderRadius="20px">{(elem.language!=null) ?elem.language:"React"}</Button>
            </Stack>

            <Text> Used {elem.language} to develop the project</Text>
          
          </div>

          <div className='repocardrightdiv'>
           <Button onClick={()=>{handleViewRepo(elem.full_name)}}>View Repo</Button>
           <Button>Live Demo</Button>

          </div>



       </div>
       

     )


     })

      }
      


    </div>
)
}

export default UserProfile;