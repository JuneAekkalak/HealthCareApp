/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import { images } from "../constants"
import {
  Button,
  Image,
  FormControl,
  Box,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Input,
} from 'native-base';

const Signup = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="xl"
            color="indigo.700"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold">
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}
            fontWeight="medium"
            size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input variant="rounded" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input variant="rounded" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" variant="rounded" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input type="password" variant="rounded" />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              style={styles.radius}
              /*onPress={() => props.navigation.navigate('Login')}*/>
              Sign up
            </Button>
          </VStack>
          <Center>
            <Image  source={images.logo_team} alt="team" size="2xl" />
          </Center>
          
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  green: {
    color: '#21980E',
  },
  blue: {
    color: 'darkblue',
  },
  input: {
    width: 200,
    height: 42,
  },
  radius: {
    marginTop: 25,
    borderRadius: 15,
    height: 45,
  },
});
export default Signup;
