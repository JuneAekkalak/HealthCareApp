import React from 'react';
import {Login, Signup, SelectSymptom, CategoryList} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button, StyleSheet, Alert} from 'react-native';

import Tabs from './navigation/tabs';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signup"
          component={Signup}
        />

        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Tabs}
        />

        <Stack.Screen
          options={{
            title: 'เลือกอาการ',
            headerStyle: {
              textAlign: 'center',
              backgroundColor: '#2585C0',
            },
            headerTitleStyle: {
              color: 'white',
              alignSelf: 'center',
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                styles={styles.button}
                onPress={() =>
                  Alert.alert('สำเร็จ', 'คุณบันทึกอาการสำเร็จ', [
                    {
                      text: 'Ok',
                      onPress: () => ({CategoryList}),
                    },
                  ])
                }
                title="เสร็จสิ้น"
                color="#053C5F"
                borderRadius="15"
              />
            ),
          }}
          name="SelectSymptom"
          component={SelectSymptom}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    marginRight: 15,
    borderRadius: 15,
  },
});