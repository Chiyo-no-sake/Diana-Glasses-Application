import React, {RefObject} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
	children?: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	ref?: RefObject<View>;
	backgroundGradient?: string[];
	startGradient?: { x: number; y: number };
	endGradient?: { x: number; y: number };
};

const Card = ({
	children,
	style,
	backgroundGradient,
	startGradient,
	endGradient,
}: Props) => {
	return backgroundGradient ? (
		<LinearGradient
			colors={backgroundGradient}
			start={startGradient}
			end={endGradient}
			style={[styles.card, style]}
		>
			{children}
		</LinearGradient>
	) : (
		<View style={[styles.card, style]}>{children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
	},
});

export default Card;
