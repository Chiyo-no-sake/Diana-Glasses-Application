import React, { MutableRefObject, RefObject } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  ref?: RefObject<View>;
};

const Card = ({ children, style, ref }: Props) => {
  return (
    <View style={[styles.card, style]} ref={ref}>
      {children}
    </View>
  );
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
