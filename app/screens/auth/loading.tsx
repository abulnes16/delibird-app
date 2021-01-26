/* Loading screen
   Renders a loader to indicates that the app is loading
*/

import React, { useEffect } from 'react';
import { Layout, Spinner, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const LoadingScreen = (props: any) => {
  const theme = useTheme();

  useEffect(() => {
    const waitForLogin = () => {
      setTimeout(() => {
        props.navigation.navigate('Login');
      }, 2000);
    };
    waitForLogin();
  }, [props.navigation]);

  return (
    <Layout
      style={[
        styles.container,
        { backgroundColor: theme['color-primary-default'] },
      ]}>
      <Spinner size="giant" status="basic" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
