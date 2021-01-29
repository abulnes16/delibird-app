import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      <Text>This is the HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
