import React from 'react';
import {View} from "react-native";
import theme from "../../../styles/theme";

type Props = {
	size?: 'small' | 'medium' | 'large';
}

export default ({size = 'medium'}: Props) => {
	let margin;

	switch (size) {
		case "large":
			margin = theme.app.margins.spacer.large;
			break;
		case "medium":
			margin = theme.app.margins.spacer.medium;
			break;
		case "small":
			margin = theme.app.margins.spacer.small;
	}

	return <View
		style={{margin}}
	/>
}

