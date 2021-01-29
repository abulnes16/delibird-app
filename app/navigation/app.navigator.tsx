/* App Navigator
  Contains the whole app navigation configuration
*/

// React
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';

// Navigators
import AuthNavigator from './auth/auth.navigator';
import HomeNavigator from './home/home.navigator';

const RootNavigator = createStackNavigator();

const AppNavigation = (props: any): React.ReactElement => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const userLogged = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          setToken(userToken);
        }
      } catch (err) {
        console.log(err);
      }
    };

    userLogged();
  }, []);

  return (
    <RootNavigator.Navigator screenOptions={{ headerShown: false }}>
      <RootNavigator.Screen name="Auth" component={AuthNavigator} />
      <RootNavigator.Screen name="App" component={HomeNavigator} />
    </RootNavigator.Navigator>
  );
};

export default AppNavigation;
