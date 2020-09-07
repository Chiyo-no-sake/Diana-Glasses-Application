import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  width: number;
  height: number;
  value: string;
  selectedBgGradient?: string[];
  fontSize?: number;
  selected?: boolean;
  onPress: (index: number) => void;
};

const DropDownButton = (props: Props) => {
  const text = (
    <Text numberOfLines={1} style={[styles.text, { fontSize: props.fontSize }]}>
      {props.value}
    </Text>
  );

  return (
    <TouchableWithoutFeedback
      style={[
        {
          width: props.width,
          height: props.height,
          elevation: 4,
        },
      ]}
    >
      {props.selectedBgGradient && props.selected ? (
        <LinearGradient
          colors={props.selectedBgGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.justifyCenter,
            { width: props.width, height: props.height },
          ]}
        >
          {text}
        </LinearGradient>
      ) : (
        <View
          style={[
            { width: props.width, height: props.height },
            styles.justifyCenter,
          ]}
        >
          {text}
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  justifyCenter: {
    justifyContent: 'center',
  },
  selected: {
    borderRadius: 4,
    justifyContent: 'center',
    elevation: 4.1,
  },
  expandZone: {
    position: 'absolute',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    elevation: 4,
    overflow: 'hidden',
  },
  text: {
    fontSize: 9,
    paddingLeft: 10,
    textAlignVertical: 'center',
  },
});
export default DropDownButton;
