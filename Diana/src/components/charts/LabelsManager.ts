type ParamObject = {
	dataFrom: Date;
	dataTo: Date;
	labelingType: 'weekLike' | 'monthLike';
};

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const getLabels = ({
	dataFrom,
	dataTo,
	labelingType,
}: ParamObject): Date[] => {
	let labelDates: Date[] = [];

	switch (labelingType) {
		case 'monthLike':
			for (
				const currDate = new Date(dataFrom);
				currDate <= dataTo;
				currDate.setDate(currDate.getDate() + 7)
			) {
				labelDates.push(new Date(currDate));
			}
			break;
		case 'weekLike':
			for (
				const currDate = new Date(dataFrom);
				currDate < dataTo;
				currDate.setDate(currDate.getDate() + 1)
			) {
				labelDates.push(new Date(currDate));
			}
			break;
	}

	return labelDates;
};

export function formatTitle(dateFrom: Date, dateTo: Date, viewing: string) {
	if (viewing == 'month') {
		return months[dateFrom.getMonth()];
	}
	if (viewing == 'week') {
		const start = months[dateFrom.getMonth()].substr(0, 3) +
			' ' +
			dateFrom.getDate();
		const end = months[dateTo.getMonth()].substr(0, 3) +
			' ' +
			dateTo.getDate();
		return `${start} - ${end}`
	}
}

export const createLabelFor = (
	data: Date,
	labelType: 'weekLike' | 'monthLike' = 'weekLike'
): string => {
	switch (labelType) {
		case 'monthLike':
			return data.getDate() + ' ' + months[data.getMonth()].substr(0, 3);
		case 'weekLike':
			return days[data.getDay()].substr(0, 3) + ' ' + data.getDate();
	}
};
