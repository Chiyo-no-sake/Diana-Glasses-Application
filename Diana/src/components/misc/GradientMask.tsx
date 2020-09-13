import React from 'react';
import MaskedView from "@react-native-community/masked-view";
import {LinearGradient} from "react-native-linear-gradient";
import {StyleProp, StyleSheet, ViewStyle} from "react-native";

type Props = {
	maskElement: JSX.Element,
	gradient: string[],
	start?: { x: number, y: number },
	end?: { x: number, y: number },
	containerStyle?: StyleProp<ViewStyle>,
	gradientStyle?: StyleProp<ViewStyle>,
}

const GradientMask = (props: Props) => {
	return <MaskedView
		maskElement={props.maskElement}
		style={[styles.container, props.containerStyle]}
	>
		<LinearGradient
			colors={props.gradient} start={props.start} end={props.end}
			style={[styles.gradient, props.gradientStyle]}
		/>
	</MaskedView>

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	gradient: {
		flex: 1,
	}
});

export default GradientMask;
