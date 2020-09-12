import React from 'react';
import {Circle} from 'react-native-svg';
import theme from '../../../../styles/theme';

type DecoratorProps<DataType> = {
	x?: (n: number) => number;
	y?: (n: number) => number;
	xAccessor?: (item: DataType) => number;
	yAccessor?: (item: DataType) => number;
	data?: DataType[];
	blueColorLimit?: number;
	greenColorLimit?: number;
	orangeColorLimit?: number;
};

CircleTemperatureDecorator.defaultProps = {
	xAccessor: (item: number) => item,
	yAccessor: (item: number) => item,
	blueColorLimit: 0,
	greenColorLimit: 0,
	orangeColorLimit: 0,
};

function CircleTemperatureDecorator<DataType>(props: DecoratorProps<DataType>) {
	return (
		<>
			<theme.charts.temperature.gradientsDefs/>
			{props.data
				? props.data.map((value, index) =>
					props.data &&
					props.x &&
					props.xAccessor &&
					props.yAccessor &&
					props.y ? (
						<Circle
							cx={props.x(props.xAccessor(value))}
							cy={props.y(props.yAccessor(value))}
							r={5}
							fill={getPointColor(props.yAccessor(value))}
							stroke='#FFF'
							key={index}
						/>
					) : null
				)
				: null}
		</>
	);

	function getPointColor(val: number): string {
		// @ts-ignore
		if (val < props.blueColorLimit) return 'url(#LOW_VAL)';
		// @ts-ignore
		if (val < props.greenColorLimit) return 'url(#OK_VAL)';
		// @ts-ignore
		if (val < props.orangeColorLimit) return 'url(#MED_VAL)';
		return 'url(#HIGH_VAL)';
	}
}

export default CircleTemperatureDecorator;
