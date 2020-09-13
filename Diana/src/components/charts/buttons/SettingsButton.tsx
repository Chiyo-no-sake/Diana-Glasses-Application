import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import theme from "../../../../styles/theme";
import Octicons from "react-native-vector-icons/Octicons";
import {StyleSheet, TouchableOpacity} from "react-native";

type Props = {
	onPress?: () => void;
}

const SettingsButton = ({onPress}: Props) => {
	return <TouchableOpacity
		onPress={onPress}>
		<LinearGradient
			colors={theme.app.secondaryGradient}
			style={styles.iconContainer}
			start={{x: -0.5, y: -0.5}}
			end={{x: 1.3, y: 1.3}}
		>
			<Octicons name={'gear'}
			          size={theme.charts.temperature.dimensions.settingsIconSize}
			          color={'#FFF'} style={{alignSelf: 'center'}}/>
		</LinearGradient>
	</TouchableOpacity>
}

const styles = StyleSheet.create({
	iconContainer: {
		borderRadius: theme.charts.temperature.dimensions.settingsIconBorderRadius,
		alignSelf: 'flex-end',
		justifyContent: 'center',
		padding: theme.charts.temperature.margins.iconContainerPadding,
		width: theme.charts.temperature.dimensions.settingsIconContainerSize,
		height: theme.charts.temperature.dimensions.settingsIconContainerSize,
		elevation: 4,
	},
})

export default SettingsButton;
