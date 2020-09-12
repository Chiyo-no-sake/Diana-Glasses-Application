import React, {useContext} from 'react';
import TemperatureContext, {
  DataType,
  TemperatureContextObject,
} from '../../../context/TemperatureContext';
import TemperatureChart from './TemperatureChart';
import * as labelsManager from '../LabelsManager';

type Props = {
	dataFrom: Date;
	dataTo: Date;
	labelingType: 'weekLike' | 'monthLike';
};

type State = {};

const getDataInRange = (data: DataType[], dataFrom: Date, dataTo: Date) => {
	return data.filter((val) => val.date >= dataFrom && val.date <= dataTo);
};

const TemperatureChartContainer = ({
	dataFrom,
	dataTo,
	labelingType,
}: Props) => {
	const contextData: TemperatureContextObject = useContext(
		TemperatureContext);

	const inRangeData: DataType[] = getDataInRange(
		contextData.state.data,
		dataFrom,
		dataTo
	);

	const labelDates = labelsManager.getLabels({
		dataFrom,
		dataTo,
		labelingType,
	});

	return (
		<TemperatureChart
			inRangeData={inRangeData}
			labelDates={labelDates}
			labelXAccessor={(item: Date) =>
				labelsManager.createLabelFor(item, labelingType)
			}
		/>
	);
};

export default TemperatureChartContainer;
