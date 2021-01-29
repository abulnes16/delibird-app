/* App Navigator
  Contains the whole app navigation configuration
*/

// React
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// Navigators
import AuthNavigator from './auth/auth.navigator';
import HomeNavigator from './home/home.navigator';

const RootNavigator = createStackNavigator();

const AppNavigation = (): React.ReactElement => {
  return (
    <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigator.Screen name="Auth" component={AuthNavigator} />
      <RootNavigator.Screen name="App" component={HomeNavigator} />
    </RootNavigator.Navigator>
  );
};

export default AppNavigation;
