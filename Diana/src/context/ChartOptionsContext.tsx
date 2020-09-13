import React, {Dispatch, Reducer} from "react";
import createDataContext from "./createDataContext";

type State = {
	viewRange: 'month' | 'week' | 'day',
}

type Action = {
	type: 'SET_RANGE',
	payload?: 'month' | 'week' | 'day',
}

export type ChartOptionsContextObject = {
	state: State,
	setMonthView: () => void,
	setWeekView: () => void,
	setDayView: () => void,
}

const reducer: Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case "SET_RANGE":
			return action.payload ? {
				...state,
				viewRange: action.payload
			} : state;
	}
}

const actions = {
	setMonthView: (dispatch: Dispatch<Action>) => {
		return () => {dispatch({type: 'SET_RANGE', payload: 'month'})};
	},
	setWeekView: (dispatch: Dispatch<Action>) => {
		return () => {dispatch({type: 'SET_RANGE', payload: 'week'})};
	},
	setDayView: (dispatch: Dispatch<Action>) => {
		return () => {dispatch({type: 'SET_RANGE', payload: 'day'})};
	}
}


const {Context, Provider} = createDataContext({
	reducer,
	actions,
	initialState: {viewRange: 'week'},
	defaultContextValue: undefined,
});

export default Context;
export {Provider as ChartOptionsProvider};
