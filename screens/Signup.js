/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, StyleSheet,ScrollView,SafeAreaView,Alert} from 'react-native';
import {images} from '../constants';
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

const Signup = props => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
              size="xl"
              color="#0076BE"
              _dark={{
                color: 'warmGray.50',
              }}
              >
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
              <FormControl.Label>Password</FormControl.Label>
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
                    onPress={handleClick}
                    backgroundColor="#0076BE">
                    {show ? 'Hide' : 'Show'}
                  </Button>
                }
                placeholder="Password"
              />
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input type="password" variant="rounded" />
              </FormControl>

              <Button
                mt="2"
                colorScheme="indigo"
                style={styles.radius}
                onPress={() => 
                  Alert.alert('สำเร็จ', 'ลงทะเบียนสำเร็จ', [
                    {
                      text: 'ตกลง',
                      onPress: () => props.navigation.goBack(),
                    },
                  ])
                 }
              >
                Sign up
              </Button>
            </VStack>
            <Center>
              <Image source={images.logo_team} alt="team" size="2xl" />
            </Center>
          </Box>
        </Center>
      </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4FB",
  },
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
    backgroundColor: '#0076BE',
  },
});
export default Signup;
