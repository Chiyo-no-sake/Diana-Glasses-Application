import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDown from 'react-native-dropdown-picker';
import theme from "../../../../styles/theme";

type Props = {
	title: string;
	defaultValue: string;
	items: { value: string, label: string }[];
	onChangeItem?: (item: { value: 'string', label: 'string' }) => void;
	placeHolder?: string;
}

const PickOption = (props: Props) => {

	return <View style={styles.row}>
		<View style={styles.left}>
			<Text style={styles.text}>{props.title}</Text>
		</View>
		<View>
			<DropDown
				defaultValue={props.defaultValue}
				onChangeItem={props.onChangeItem}
				containerStyle={styles.pickerContainer}
				placeholder={props.placeHolder || 'Choose...'}
				items={props.items}
				placeholderStyle={styles.pickerPlaceHolder}
				labelStyle={styles.labelPicker}
				activeLabelStyle={styles.activeLabel}
			/>
		</View>
	</View>
}


const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		marginHorizontal: theme.app.margins.marginSmall,
		marginVertical: theme.app.margins.marginSmall,
	},
	left: {
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		fontSize: theme.app.font.fontSizeMedium,
	},
	pickerContainer: {
		height: 30,
		width: 110,
		justifyContent: 'center',
	},
	pickerPlaceHolder: {
		height: '100%',
		textAlignVertical: 'center',
		color: '#555'
	},
	labelPicker: {
		fontSize: theme.app.font.fontSizeSmall,
	},
	activeLabel: {
		color: theme.app.secondaryColor,
		// @ts-ignore
		fontWeight: theme.app.font.fontWeightBold,
	}
})

export default PickOption;
