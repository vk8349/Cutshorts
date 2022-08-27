import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import welcome from './Screen/welcome';
import home from './Screen/home';
import request from './Screen/request';
import Checkout from './Screen/final';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          options={{headerShown: false}}
          component={welcome}
          // options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="home" 
        options={{headerShown: false}}
        component= {home} />


        <Stack.Screen
          name="request"
          options={{headerShown: false}}
          component={request}
        />

<Stack.Screen
          name="checkout"
          options={{headerShown: false}}
          component={Checkout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;