import React from 'react';
import { Icon, useTheme } from '@ui-kitten/components';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  onPress?: () => void;
  iconName: string;
}

const SocialButton = (props: Props) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.socialBtnContainer}>
      <Icon
        style={styles.socialIcon}
        fill={theme['color-primary-default']}
        name={props.iconName}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialBtnContainer: {
    backgroundColor: 'rgba(0,0,0,0.03)',
    width: 38,
    height: 38,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 25,
    height: 25,
  },
});

export default SocialButton;
