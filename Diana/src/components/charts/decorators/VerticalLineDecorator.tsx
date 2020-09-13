import React from "react";
import Svg, {Circle, Line, Text} from "react-native-svg";
// @ts-nocheck

/**
 * This props are automatically passed by the chart to all it's children
 */
type DecoratorProps<DataType> = {
	/** Function that map a value to it's position on the x axis
	 * @param n the dataset value
	 * @return x coordinate
	 */
	x: (n: number) => number;
	/** Function that map a value to it's position on the y axis
	 * @param n the dataset value
	 * @return y coordinate
	 */
	y: (n: number) => number;
	/**
	 * Datatype from the chart
	 */
	data: DataType;
	/**
	 * Height of the canvas
	 */
	height: number;
};

type Props<DataType> = {
	item: DataType;
	xAccessor: (item: DataType) => number;
	color: string,
	inset?: Partial<{ top: number, bottom: number }>
	caption?: string
	rotation?: number
}

/**
 * Decorator to use for displaying current day
 */
const VerticalLineDecorator = <DataType extends Object>(props: Props<DataType> & Partial<DecoratorProps<DataType>>) => {
	// @ts-ignore
	const x = props.x(props.xAccessor(props.item))
	const y1 = props.inset ? props.inset.top : 0

	const y2 = props.inset ?
		props.inset.bottom ?
			// @ts-ignore
			props.height - props.inset.bottom :
			props.height :
		props.height;

	const xLabel = x+7;
	const yLabel = 10;
	const circleY = props.inset? props.inset.top : 0;
	return <Svg>
		<Line
			strokeWidth={2}
			stroke={props.color}
			strokeLinejoin={"round"}
			x={x}
			y1={y1}
			y2={y2}
		/>
		<Circle cx={x} cy={circleY} r={4} fill={props.color} />
		<Text
			fontFamily={'sans-serif'}
			stroke={props.color}
			fill={props.color}
			x={xLabel}
			y={yLabel}
			originX={xLabel}
			originY={yLabel}
			rotation={props.rotation}
		>
			{props.caption}
		</Text>
	</Svg>
}
export default VerticalLineDecorator;
