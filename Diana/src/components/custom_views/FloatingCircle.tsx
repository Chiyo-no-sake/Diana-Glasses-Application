import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../../styles/theme';

type Props = {
	children?: React.ReactNode;
	style?: StyleProp<ViewStyle>;
};

const FloatingCircle = (props: Props) => {
	return (
		<LinearGradient
			colors={theme.app.secondaryGradient}
			start={{x: 0, y: 0}}
			end={{x: 1, y: 1}}
			style={[styles.plusBtn, props.style]}
		>
			{props.children}
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	plusBtn: {
		width: theme.app.dimensions.floatingCircle.radius * 2,
		height: theme.app.dimensions.floatingCircle.radius * 2,
		borderRadius: theme.app.dimensions.floatingCircle.radius,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		borderColor: theme.app.plusIconColor,
		borderWidth: 3,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FloatingCircle;
