import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Card = ({ children, style }: Props) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default Card;
