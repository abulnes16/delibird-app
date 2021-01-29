/* Home Navigator Component
   Hold the main application navigation
*/

import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/home/home.screen';
import ProfileScreen from '../../screens/home/profile.screen';
import { Icon, useTheme } from '@ui-kitten/components';

const HomeStack = createBottomTabNavigator();
const HomeNavigator = () => {
  const theme = useTheme();

  const screenOptions = useCallback((): BottomTabNavigationOptions[] => {
    return [
      {
        tabBarIcon: ({ focused }) => (
          <Icon
            style={styles.tabIcons}
            name={focused ? 'home' : 'home-outline'}
            fill={theme['color-primary-default']}
          />
        ),
      },
      {
        tabBarIcon: ({ focused }) => (
          <Icon
            style={styles.tabIcons}
            name={focused ? 'person' : 'person-outline'}
            fill={theme['color-primary-default']}
          />
        ),
      },
    ];
  }, [theme]);

  const appliedOptions = screenOptions();

  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={appliedOptions[0]}
      />
      <HomeStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={appliedOptions[1]}
      />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcons: {
    width: 30,
    height: 30,
  },
});

export default HomeNavigator;
