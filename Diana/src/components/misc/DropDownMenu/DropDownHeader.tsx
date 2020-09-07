import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

type Props = {
  width: number;
  height: number;
  backgroundGradient?: string[];
  backgroundColor?: string;
  value: string;
  fontSize?: number;
  onPress: (index: number) => void;
};

const DropDownHeader = (props: Props) => {
  let ElementToDisplay = (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <Text
        style={[styles.selectedText, { fontSize: props.fontSize, flex: 1 }]}
      >
        {props.value}
      </Text>
      <AntDesign
        name='caretdown'
        size={10}
        color='white'
        style={{ alignSelf: 'center', marginHorizontal: 10 }}
      />
    </View>
  );

  return (
    <TouchableWithoutFeedback>
      {props.backgroundGradient ? (
        <LinearGradient
          colors={props.backgroundGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.selected,
            { width: props.width, height: props.height },
          ]}
        >
          {ElementToDisplay}
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.selected,
            { backgroundColor: props.backgroundColor },
            { width: props.width, height: props.height },
          ]}
        >
          {ElementToDisplay}
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
  selectedText: {
    color: '#FFF',
    paddingLeft: 10,
    fontSize: 9,
    textAlignVertical: 'center',
  },
});

export default DropDownHeader;
