import {StatusBar} from 'expo-status-bar';
import React from 'react';
import RootSlidingNavigator from './src/navigation/RootSlidingNavigator';
import {Provider as TemperatureProvider} from './src/context/TemperatureContext';

export default function App() {
	return (
		<>
			<StatusBar style={'dark'} animated={true}/>
			<TemperatureProvider>
				<RootSlidingNavigator/>
			</TemperatureProvider>
		</>
	);
}
