/* Auth navigator module
   Contains the auth navigation configuration
*/

// React
import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

//Pages
import LoadingScreen from '../../screens/auth/loading';
import LoginScreen from '../../screens/auth/login';

const Stack = createStackNavigator();

const AuthNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
