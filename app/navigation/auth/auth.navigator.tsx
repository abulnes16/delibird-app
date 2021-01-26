/* Auth navigator module
   Contains the auth navigation configuration
*/

// React
import React from 'react';

// Navigation
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

//Pages
import LoadingScreen from '../../screens/auth/loading';
import LoginScreen from '../../screens/auth/login';

const Stack = createStackNavigator();

const AuthNavigator = (): React.ReactElement => {
  const options: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={options}
      />
      <Stack.Screen name="Login" component={LoginScreen} options={options} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
