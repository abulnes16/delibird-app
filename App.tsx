import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './app/store';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigation from './app/navigation/app.navigator';
import { default as theme } from './app/constants/theme.json';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <AppNavigation />
        </ApplicationProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
