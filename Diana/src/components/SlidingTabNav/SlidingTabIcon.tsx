import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

type Props = {
  iconContainerStyle?: {};
  onPress: () => void;
  item: JSX.Element;
  renderHighlighted?: JSX.Element;
  isHighlighted?: boolean;
};

const SlidingTabIcon = (props: Props) => {
  let child = props.item;

  if (props.isHighlighted) {
    if (props.renderHighlighted) {
      // render the highlighted element instead of the default
      child = props.renderHighlighted;
    }
  }

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.iconContainerStyle, props.iconContainerStyle]}>
        {child}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconContainerStyle: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SlidingTabIcon;
