/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import {Box, Center, Heading, NativeBaseProvider} from 'native-base';

const Home = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}
            fontWeight="semibold"
            fontSize={140}>
            H {'\n'}O{'\n'}M{'\n'}E
          </Heading>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});
export default Home;
