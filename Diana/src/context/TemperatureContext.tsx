import React, {Reducer} from 'react';
import createDataContext from './createDataContext';

// Types -------------------------------------------------
type Action = {
	type: string;
	payload?: {};
};

type State = {
	data: DataType[];
};

export type DataType = {
	temp_C: number;
	date: Date;
};

export type TemperatureContextObject = {
	state: State;
};

// Actions -------------------------------------------------

const actions = {};

// Reducer ------------------------------------------------
const temperatureReducer: Reducer<State, Action> = (state, action) => {
	switch (state) {
		default:
			return state;
	}
};

const testData = [
	{temp_C: 35.5, date: new Date('2020-09-04T14:25:36.137Z')},
	{temp_C: 35.9, date: new Date('2020-09-04T18:27:36.137Z')},
	{temp_C: 35.9, date: new Date('2020-09-04T23:27:36.137Z')},
	{temp_C: 36.0, date: new Date('2020-09-05T21:30:36.137Z')},
	{temp_C: 36.2, date: new Date('2020-09-06T14:28:40.137Z')},
	{temp_C: 36.5, date: new Date('2020-09-06T17:18:36.138Z')},
	{temp_C: 37.0, date: new Date('2020-09-06T23:59:59.138Z')},
	{temp_C: 37.3, date: new Date('2020-09-07T10:48:36.138Z')},
	{temp_C: 37.4, date: new Date('2020-09-07T15:18:36.138Z')},
	{temp_C: 37.2, date: new Date('2020-09-07T18:58:36.138Z')},
	{temp_C: 37.1, date: new Date('2020-09-08T17:28:56.139Z')},
	{temp_C: 37.0, date: new Date('2020-09-08T19:28:36.139Z')},
	{temp_C: 37.5, date: new Date('2020-09-08T21:28:26.139Z')},
	{temp_C: 38.0, date: new Date('2020-09-09T23:28:16.139Z')},
	{temp_C: 38.3, date: new Date('2020-09-09T21:28:42.139Z')},
	{temp_C: 38.5, date: new Date('2020-09-10T22:22:36.140Z')},
	{temp_C: 38.5, date: new Date('2020-09-10T22:22:36.140Z')},
	{temp_C: 36.4, date: new Date('2020-09-11T22:18:36.140Z')},
	{temp_C: 36.6, date: new Date('2020-09-11T22:18:36.140Z')},
	{temp_C: 36.4, date: new Date('2020-09-12T22:18:36.140Z')},
	{temp_C: 36.7, date: new Date('2020-09-13T22:18:36.140Z')},
	{temp_C: 36.3, date: new Date('2020-09-13T22:18:36.140Z')},
	{temp_C: 36.5, date: new Date('2020-09-14T22:18:36.140Z')},
	{temp_C: 36.4, date: new Date('2020-09-15T22:18:36.140Z')},
	{temp_C: 36.5, date: new Date('2020-09-15T22:18:36.140Z')},
	{temp_C: 36.8, date: new Date('2020-09-15T22:18:36.140Z')},
	{temp_C: 36.7, date: new Date('2020-09-16T22:18:36.140Z')},
	{temp_C: 37.3, date: new Date('2020-09-17T22:18:36.140Z')},
	{temp_C: 37.5, date: new Date('2020-09-18T22:18:36.140Z')},
	{temp_C: 38.0, date: new Date('2020-09-19T22:18:36.140Z')},
	{temp_C: 37.9, date: new Date('2020-09-20T22:18:36.140Z')},
	{temp_C: 37.5, date: new Date('2020-09-21T22:18:36.140Z')},
	{temp_C: 36.0, date: new Date('2020-09-22T22:18:36.140Z')},
];

const {Context, Provider} = createDataContext({
	reducer: temperatureReducer,
	actions,
	initialState: {
		data: testData,
	},
	defaultContextValue: undefined,
});

export default Context;
export {Provider};
