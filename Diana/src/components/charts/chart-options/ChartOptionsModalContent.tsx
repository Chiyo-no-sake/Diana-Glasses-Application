import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PickOption from './PickOption';
import theme from '../../../../styles/theme';
import Spacer from '../../../components/misc/Spacer';
import ChartOptionsContext, {ChartOptionsContextObject} from "../../../context/ChartOptionsContext";

type Props = {
	title?: string;
}

const timeRangePickerList = [
	{value: 'week', label: 'This Week'},
	{value: 'month', label: 'This Month'},
]

const ChartOptionsModalContent = (props: Props) => {
	const optionsCtx: ChartOptionsContextObject = useContext(
		ChartOptionsContext);

	const setViewRange = (range: string) => {
		switch (range) {
			case 'week':
				optionsCtx.setWeekView();
				break;
			case 'month':
				optionsCtx.setMonthView();
				break;
			default:
				return;
		}
	}

	return (<View style={styles.container}>
		<FontAwesome name={"angle-down"} size={24} color={'#AAA'}
		             style={styles.caret}/>
		<Spacer size='small'/>
		<Text style={styles.header}>Chart Options</Text>
		<Spacer/>
		<PickOption
			title='Choose chart time range:'
			items={timeRangePickerList}
			defaultValue={optionsCtx.state.viewRange}
			onChangeItem={item => {
				setViewRange(item.value);
			}}
		/>
	</View>);
}

const styles = StyleSheet.create({
	container: {
		margin: theme.app.margins.containers.paddingLarge,
		alignItems: 'flex-start',
		flexDirection: "column",
	},
	header: {
		fontSize: theme.app.font.fontSizeLarge,
		alignSelf: 'center',
	},
	caret: {
		position: 'absolute',
		top: -22,
		alignSelf: 'center'
	},
	scrollView: {
		alignSelf: "stretch",
		flex: 1
	}
})

export default ChartOptionsModalContent;
