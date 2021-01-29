/* Home Navigator Component
   Hold the main application navigation
*/

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeTabsNavigator from './tabs.navigator';
import ProfileScreen from '../../screens/home/profile.screen';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main">
      <HomeStack.Screen name="Main" component={HomeTabsNavigator} />
      <HomeStack.Screen name="Profile" component={ProfileScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
