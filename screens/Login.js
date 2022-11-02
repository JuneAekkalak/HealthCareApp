/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { images } from "../constants"
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {
  Button,
  Box,
  Text,
  Link,
  Image,
  HStack,
  Center,
  Heading,
  NativeBaseProvider,
  VStack,
  Input,
} from 'native-base';

const Login = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <NativeBaseProvider>
      <Center px={10}>
        <VStack space={5} alignItems="center">
          <Image
            style={styles.margin1}
            size={300}
            borderRadius={50}
            source={images.logo_healthCare}
            alt="logo"
          />
          <Heading size="lg" style={styles.blue}>
            Welcome
            <Text style={styles.green}> To HealthCare</Text>
          </Heading>
          <Input
            style={styles.center}
            size="lg"
            variant="rounded"
            placeholder="Email / Username"
          />
          <Box alignItems="center">
            <Input
              style={[styles.center, styles.input]}
              size="lg"
              variant="rounded"
              type={show ? 'text' : 'password'}
              w="100%"
              py="0"
              InputRightElement={
                <Button
                  size="xs"
                  rounded="none"
                  w="2/6"
                  h="full"
                  bg="indigo.600"
                  onPress={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              }
              placeholder="Password"
            />
          </Box>
          <TouchableOpacity>
            <Button
              style={[styles.roundButton]}
              mt="2"
              colorScheme="indigo"
              onPress={() => props.navigation.navigate('Home')}>
              <Text style={styles.text} fontSize="lg">
                Login
              </Text>
            </Button>
          </TouchableOpacity>

          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => props.navigation.navigate('Signup')}>
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 42,
  },
  green: {
    color: '#21980E',
  },
  blue: {
    color: 'darkblue',
  },
  margin1: {
    marginTop: 27,
  },
  center: {
    textAlign: 'auto',
  },
  roundButton: {
    width: 310,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
  },
  text: {
    color: 'white',
  },
});
export default Login;
