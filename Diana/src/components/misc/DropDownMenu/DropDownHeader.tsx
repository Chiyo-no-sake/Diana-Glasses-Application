import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {AntDesign} from '@expo/vector-icons';

type Props = {
	width: number;
	height: number;
	backgroundGradient?: string[];
	backgroundColor?: string;
	value: string;
	fontSize?: number;
	onPress: () => void;
};

const DropDownHeader = (props: Props) => {
	let ElementToDisplay = (
		<TouchableOpacity
			style={[styles.touchable,
				{width: props.width, height: props.height}]}
			onPress={props.onPress}>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
				}}
			>
				<Text
					style={[styles.selectedText,
						{fontSize: props.fontSize, flex: 1}]}
				>
					{props.value}
				</Text>
				<AntDesign
					name='caretdown'
					size={10}
					color='white'
					style={{alignSelf: 'center', marginHorizontal: 10}}
				/>
			</View>
		</TouchableOpacity>
	);

	return props.backgroundGradient ? (
		<LinearGradient
			colors={props.backgroundGradient}
			start={{x: 0, y: 0}}
			end={{x: 1, y: 1}}
			style={[
				styles.selected,
				{width: props.width, height: props.height},
			]}
			onTouchEnd={props.onPress}
		>
			{ElementToDisplay}
		</LinearGradient>
	) : (


		<View
			style={[
				styles.selected,
				{backgroundColor: props.backgroundColor},
				{width: props.width, height: props.height},
			]}
		>
			{ElementToDisplay}
		</View>

	)
};

const styles = StyleSheet.create({
	justifyCenter: {
		justifyContent: 'center',
	},
	touchable: {
		borderColor: '#F00',
		borderWidth: 1,
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
