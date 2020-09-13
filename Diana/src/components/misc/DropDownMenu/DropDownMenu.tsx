import React, {PropsWithChildren, useRef} from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import DropDownHeader from './DropDownHeader';
import DropDownButton from './DropDownButton';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

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


const DropDownMenu = (props: PropsWithChildren<Props>) => {
	const [expanded, setExpanded] = React.useState(false);
	const [selected, setSelected] = React.useState(
		props.defaultValueIndex || 0);
	const menuHeight = props.height * props.values.length + INSETTOP;

	const animatedVal = useRef(new Animated.Value(0)).current;

	function expand() {
		Animated.timing(animatedVal, {
			duration: 300,
			useNativeDriver: true,
			toValue: 1,
		}).start()
	}

	function collapse() {
		Animated.timing(animatedVal, {
			duration: 300,
			useNativeDriver: true,
			toValue: 0,
		}).start()
	}

	if (!props.values) {
		throw new Error('specify at least an entry');
	}

	return <DropDownPicker
        items={[
            {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
            {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
        ]}
        containerStyle={{height: 40}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
    />

	(
		<View style={styles.container}>
			<DropDownHeader
				height={props.height}
				width={props.width}
				value={props.values[selected]}
				backgroundGradient={props.backgroundGradient}
				backgroundColor={props.backgroundColor}
				fontSize={props.fontSize}
				onPress={() => {
					expanded ? collapse() : expand();
					setExpanded(!expanded);
				}}
			/>


			<Animated.View
				style={[
					{
						marginTop: props.height - INSETTOP,
						width: props.width,
						height: menuHeight,
						opacity: animatedVal,
					},
					styles.expandZone,
					{
						transform: [{translateY: -menuHeight / 2},
							{scaleY: animatedVal},
							{translateY: menuHeight / 2}]
					}
				]}
			>
				<FlatList
					style={{marginTop: INSETTOP}}
					data={props.values}
					renderItem={({item, index}) => {
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
				/>
			</Animated.View>

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
