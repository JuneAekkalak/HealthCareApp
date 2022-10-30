import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Login from './pages/Login';
import Signup from './pages/Signup';


//Screen names
const homeName = "Home";
const page1Name = "Page1";
const page2Name = "Page2";
const page3Name = "Page3";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'nameicon' : 'nameicon-outline';

              } else if (rn === page1Name) {
                iconName = focused ? 'nameicon' : 'nameicon-outline';

              } else if (rn === page2Name) {
                iconName = focused ? 'nameicon' : 'nameicon-outline';
              }
              else if (rn === page3Name) {
                   iconName = focused ? 'nameicon' : 'nameicon-outline';
                 }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>
   
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={page1Name} component={Page1} />
          <Tab.Screen name={page2Name} component={Page2} />
          <Tab.Screen name={page3Name} component={Page3} />

        </Tab.Navigator>
  );
}

export default MainContainer;