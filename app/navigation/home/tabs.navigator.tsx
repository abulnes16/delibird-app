/**
 * HomeTabsNavigator
 * Configure the main app navigation with tabs
 */

import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import { Icon, useTheme } from '@ui-kitten/components';

import HomeScreen from '../../screens/home/home.screen';
import RecipesScreen from '../../screens/home/recipes.screen';

const HomeTabs = createBottomTabNavigator();

const HomeTabsNavigator = () => {
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
            name={focused ? 'inbox' : 'inbox-outline'}
            fill={theme['color-primary-default']}
          />
        ),
      },
    ];
  }, [theme]);

  const appliedOptions = screenOptions();

  return (
    <HomeTabs.Navigator initialRouteName="Home">
      <HomeTabs.Screen
        name="Home"
        component={HomeScreen}
        options={appliedOptions[0]}
      />
      <HomeTabs.Screen
        name="Recipes"
        component={RecipesScreen}
        options={appliedOptions[1]}
      />
    </HomeTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcons: {
    width: 30,
    height: 30,
  },
});

export default HomeTabsNavigator;
