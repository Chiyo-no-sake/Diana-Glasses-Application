import React, { PropsWithChildren } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownHeader from './DropDownHeader';
import DropDownButton from './DropDownButton';

type Props = {
  width: number;
  height: number;
  backgroundGradient?: string[];
  backgroundColor?: string;
  values: string[];
  defaultValueIndex?: number;
  selectedDimmedGradient?: string[];
  fontSize?: number;
  onChangeValue?: (index: number) => void;
};

const INSETTOP = 10;
const BTNTEXTPADD = 4;

const DropDownMenu = (props: PropsWithChildren<Props>) => {
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState(props.defaultValueIndex || 0);

  if (!props.values) {
    throw new Error('specify at least an entry');
  }

  let selectedElement = (
    <Text style={[styles.selectedText, { fontSize: props.fontSize }]}>
      {props.values[selected]}
    </Text>
  );

  return (
    <View style={styles.container}>
      <DropDownHeader
        height={props.height}
        width={props.width}
        value={props.values[selected]}
        backgroundGradient={props.backgroundGradient}
        backgroundColor={props.backgroundColor}
        fontSize={props.fontSize}
        onPress={() => null}
      />
      <View
        style={[
          {
            marginTop: props.height - INSETTOP,
            width: props.width,
            height: props.height * props.values.length + INSETTOP,
          },
          styles.expandZone,
        ]}
      >
        <FlatList
          style={{ marginTop: INSETTOP }}
          data={props.values}
          renderItem={({ item, index }) => {
            return (
              <DropDownButton
                height={props.height}
                width={props.width}
                onPress={() => null}
                selectedBgGradient={props.selectedDimmedGradient}
                fontSize={props.fontSize}
                value={item}
                selected={selected === index}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>
    </View>
  );
};

// TODO: ADD-IOS-SHADOWS
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
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
    padding: 4,
    textAlignVertical: 'center',
  },
  selectedText: {
    color: '#FFF',
    padding: 4,
    fontSize: 9,
    textAlignVertical: 'center',
  },
});

export default DropDownMenu;
