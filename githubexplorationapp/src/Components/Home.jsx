import React, { useEffect, useState } from 'react';
import { Card, Box, Flex, CardBody, CardFooter, Image, Stack, Heading, Text, Spinner } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import userDataActionCreator from './ActionCreators/userDataActionCreator';
import updatedUserDataActionCreator from './ActionCreators/updatedUserDataActionCreator';

const Home = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const userData = useSelector((storeData) => {
    return storeData.userData;
  });

  const updatedUserData = useSelector((storeData) => {
    return storeData.updatedUserData;
  });

  useEffect(() => {
    if (!userData.length > 0) {
      axios
        .get('https://api.github.com/users')
        .then((resp) => {
          dispatch(userDataActionCreator(resp.data));
        })
        .catch(() => {
          alert("Couldn't get data from server ");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchUserDetails = async (user) => {
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
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const updatedUserData = [];
      for (const user of userData) {
        const userDetail = await fetchUserDetails(user);
        updatedUserData.push({ ...user, ...userDetail });
      }

      dispatch(updatedUserDataActionCreator(updatedUserData));
    };

    if (userData.length > 0) {
      fetchDetails();
    }
  }, [userData]);

  return (
    <div className='homecontainer'>
      {isLoading ? (
        <Spinner size='xl' color='teal' />
      ) : (
        updatedUserData.map((elem) => (
          <Card key={elem.id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' padding='0.5rem' maxH='225px' maxW='400px'>
            <Image objectFit='cover' borderRadius='5px' maxW={{ base: '100%', sm: '150px' }} src={elem.avatar_url} alt='Caffe Latte' />
            <Stack>
              <CardBody>
                <Heading size='sm'>{elem.login}</Heading>
                <Text py='1' maxH='50px'>
                  following other users
                </Text>
              </CardBody>
              <CardFooter maxW='350px'>
                <Card bg='lightgrey' size='sm' w='full' maxH='200px'>
                  <CardBody>
                    <Flex justifyContent='space-between'>
                      <Box mx={1}>
                        <Text fontSize='xs' fontWeight='bold'>
                          Article
                        </Text>
                        <Text>{elem.articles}</Text>
                      </Box>
                      <Box mx={1}>
                        <Text fontSize='xs' fontWeight='bold'>
                          Follower
                        </Text>
                        <Text>{elem.followers}</Text>
                      </Box>
                      <Box mx={1}>
                        <Text fontSize='xs' fontWeight='bold'>
                          Following
                        </Text>
                        <Text>{elem.following}</Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              </CardFooter>
            </Stack>
          </Card>
        ))
      )}
    </div>
  );
};

export default Home;
