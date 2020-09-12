import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {StyleProp, ViewStyle} from 'react-native';

// HOC function: a function that takes in a component<P> where P is the
// propType of it and then return a component with out given functionalities

const withGradient = <P extends Object>(
	WrappedComponent: React.ComponentType<P>,
	gradientProps: {
		colors: string[];
		start?: { x: number; y: number };
		end?: { x: number; y: number };
		style?: StyleProp<ViewStyle>;
	}
) => {
	if (!gradientProps.style) {
		gradientProps.style = {
			flex: 1,
			flexDirection: 'row',
		};
	}

	if (!gradientProps.start) {
		gradientProps.start = {x: 0, y: 0.5};
	}

	if (!gradientProps.end) {
		gradientProps.end = {x: 1, y: 0.5};
	}

	// The ACTUAL Element that will be displayed is WithMainGradient.
	// It will return our wrapper and inside of it the wrapped element, passing
	// him all his props.
	const WithMainGradient = (props: P) => (
		<LinearGradient
			colors={gradientProps.colors}
			start={gradientProps.start}
			end={gradientProps.end}
			style={gradientProps.style}
		>
			<WrappedComponent {...props} />
		</LinearGradient>
	);

	return WithMainGradient;
};

export default withGradient;
