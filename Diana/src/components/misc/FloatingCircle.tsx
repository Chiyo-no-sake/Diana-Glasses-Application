import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { wallGradients } from '../../styles/gradients';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const FloatingCircle = (props: Props) => {
  return (
    <LinearGradient
      colors={wallGradients.GreenAzure}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.plusBtn, props.style]}
    >
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  plusBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    margin: 10,
    alignSelf: 'center',
    borderColor: '#FFF',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingCircle;
