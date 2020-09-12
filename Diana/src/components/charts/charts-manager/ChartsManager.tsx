import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TemperatureChartContainer
	from '../temperature/TemperatureChartContainer';
import ChartSettingsModalContent
	from '../chart-options/ChartOptionsModalContent';
import SettingsButton from "../buttons/SettingsButton";
import Modal from "react-native-modal";
import theme from "../../../../styles/theme";

type Props = {
	dataFrom: Date;
	dataTo: Date;
	labelingType: 'weekLike' | 'monthLike';
	modalVisible?: boolean;
	onSettingsPress?: () => void;
	onModalBackdropPress?: () => void;
	onBackButtonPress?: () => void;
	onThrowDown?: () => void;
	title?: string;
};

const ChartsManager = ({
	dataFrom, dataTo, labelingType, onSettingsPress,
	modalVisible, onModalBackdropPress, onBackButtonPress, title, onThrowDown
}: Props) => {

	return (
		<View style={styles.container}>
			{
				//TODO ADD Scroll Horizontal
			}
			<Modal
				onBackdropPress={onModalBackdropPress}
				isVisible={modalVisible}
				presentationStyle={"overFullScreen"}
				hasBackdrop={true}
				backdropOpacity={0.1}
				hardwareAccelerated
				animationInTiming={400}
				animationOutTiming={400}
				useNativeDriver
				onBackButtonPress={onBackButtonPress}
				swipeThreshold={50}
				onSwipeComplete={onThrowDown}
				swipeDirection={"down"}
				style={{margin: 0}}
				backdropTransitionInTiming={100}
				backdropTransitionOutTiming={100}
			>
				<View style={styles.modalBg}>
					<ChartSettingsModalContent/>
				</View>
			</Modal>
			<View style={styles.topBar}>
				{// @ts-ignore
					<Text style={styles.title}>{title}</Text>
				}
				<SettingsButton onPress={onSettingsPress}/>
			</View>
			<TemperatureChartContainer
				dataFrom={dataFrom}
				dataTo={dataTo}
				labelingType={labelingType}
			/>
		</View>
	);
};

// TODO: add shadows for iOS
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		padding: theme.app.margins.containers.paddingMedium,
	},
	topBar: {
		width: '100%',
		height: theme.charts.temperature.dimensions.topBarHeight,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	title: {
		fontSize: theme.app.font.fontSizeLarge,
		color: theme.charts.temperature.textColor,
		fontWeight: theme.app.font.fontWeightBold,
		flex: 1,
		textAlign: 'left',
		paddingLeft: theme.charts.temperature.margins.titleLeftPadding,
	},
	modalBg: {
		backgroundColor: theme.modals.chartSettings.backgroundColor,
		elevation: 15,
		flex: 1,
		marginHorizontal: theme.app.margins.modal.horizontal,
		marginTop: theme.app.margins.modal.top,
		marginBottom: theme.app.margins.modal.bottom,
		borderTopRightRadius: theme.app.dimensions.modal.borderTopRadius,
		borderTopLeftRadius: theme.app.dimensions.modal.borderTopRadius,
		borderBottomRightRadius: theme.app.dimensions.modal.borderBottomRadius,
		borderBottomLeftRadius: theme.app.dimensions.modal.borderBottomRadius,
	}
});

ChartsManager.defaultProps = {
	labelCount: 'each',
};

export default ChartsManager;
