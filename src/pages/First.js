import React from "react";
import { StyleSheet } from "react-native";
import {
    Input,
    NativeBaseProvider
  } from 'native-base';

const First = () => {
  return (
    <NativeBaseProvider>
      <Input
             
             size="lg"
             variant="rounded"
             placeholder="Username"
           />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default First;