import React, {useContext, useState} from 'react';
import ChartsManager from './ChartsManager';
import ChartOptionsContext, {
	ChartOptionsContextObject,
	ChartOptionsProvider
} from "../../../context/ChartOptionsContext";
import {formatTitle} from "../LabelsManager";

// Types
// ----------------------------------------------------------------------

// Functions
// ----------------------------------------------------------------------
const findLastMonthDay = (year: number, month: number) => {
	return new Date(year, month + 1, 0).getDate();
};

const getDateRange = (viewing: 'month' | 'week'): [Date, Date] => {
	const today = new Date();

	let dataFrom: Date, dataTo: Date;

	if (viewing === 'week') {
		dataFrom =
			new Date(today.getFullYear(), today.getMonth(), today.getDate());
		dataFrom.setHours(12);
		while (dataFrom.getDay() != 1) {
			dataFrom.setDate(dataFrom.getDate() - 1);
		}
		dataTo = new Date(dataFrom);
		dataTo.setDate(dataFrom.getDate() + 7);
	} else {
		dataFrom = new Date(today.getFullYear(), today.getMonth(), 1);
		dataFrom.setHours(12);
		dataTo =
			new Date(today.getFullYear(), today.getMonth(), today.getDate());
		dataTo.setDate(findLastMonthDay(today.getFullYear(), today.getMonth()));
	}

	return [dataFrom, dataTo];
};


// Component
// ----------------------------------------------------------------------
const ChartsManagerContainer = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const chartOptionsContext: ChartOptionsContextObject = useContext(
		ChartOptionsContext);

	const [dataFrom, dataTo] = getDateRange(
		chartOptionsContext.state.viewRange);
	const labelingType = chartOptionsContext.state.viewRange === 'month' ?
		'monthLike' : 'weekLike';

	const title = formatTitle(dataFrom, dataTo,
		chartOptionsContext.state.viewRange);

	return (
		<ChartsManager
			dataFrom={dataFrom}
			dataTo={dataTo}
			labelingType={labelingType}
			onSettingsPress={() => setModalVisible(true)}
			modalVisible={modalVisible}
			onModalBackdropPress={() => setModalVisible(false)}
			onBackButtonPress={() => setModalVisible(false)}
			onThrowDown={() => setModalVisible(false)}
			title={title}
		/>
	);
}

export default () => <ChartOptionsProvider>
	<ChartsManagerContainer/>
</ChartOptionsProvider>;
