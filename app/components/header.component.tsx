import React from 'react';
import { Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const Header = () => {
  const theme = useTheme();
  return (
    <Layout
      style={[
        styles.container,
        { backgroundColor: theme['color-primary-default'] },
      ]}>
      <Text category="h3" style={styles.title}>
        Bienvenido a Delibird
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
    height: '48%',
  },
  title: {
    color: 'white',
  },
});

export default Header;
