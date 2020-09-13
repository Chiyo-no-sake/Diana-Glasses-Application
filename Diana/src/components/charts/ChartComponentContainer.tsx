import React, {ReactElement} from 'react';
import ChartComponent from './ChartComponent';
import {StyleProp, ViewStyle} from 'react-native';

type Props<DataType, LabelType> = {
	data: DataType[];
	dataXAccessor: (item: DataType) => number;
	dataYAccessor: (item: DataType) => number;
	dataLabels: LabelType[];
	labelXAccessor: (item: LabelType) => number;
	labelTextAccessor?: (item: LabelType) => string;
	bezier?: boolean;
	style?: StyleProp<ViewStyle>;
	decorator?: ReactElement | ReactElement[];
};

type State = {};


export default class ChartComponentContainer<DataType,
	LabelType> extends React.Component<Props<DataType, LabelType>, State> {
	findMax(labels: LabelType[]) {
		let max = 0;
		for (let l of labels) {
			if (this.props.labelXAccessor(l) > max)
				max = this.props.labelXAccessor(l);
		}

		return max;
	}

	findMin(labels: LabelType[]) {
		let min = NaN;
		for (let l of labels) {
			if (this.props.labelXAccessor(l) < min || isNaN(min))
				min = this.props.labelXAccessor(l);
		}

		return min;
	}

	render() {
		if (!this.props.data) {
			throw new Error('Cannot draw graphs without data');
		}
		if (!this.props.dataLabels) {
			throw new Error('Cannot draw graphs without labels');
		}
		return (
			<ChartComponent
				data={this.props.data}
				dataLabels={this.props.dataLabels}
				dataXAccessor={this.props.dataXAccessor}
				dataYAccessor={this.props.dataYAccessor}
				labelXAccessor={this.props.labelXAccessor}
				labelTextAccessor={this.props.labelTextAccessor}
				decorator={this.props.decorator}
				labelXMax={this.findMax(this.props.dataLabels)}
				labelXMin={this.findMin(this.props.dataLabels)}
				bezier={this.props.bezier}
				style={this.props.style}
			/>
		);
	}
}
