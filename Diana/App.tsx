import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RootSlidingNavigator from './src/navigation/RootSlidingNavigator';
import { Provider as TemperatureProvider } from './src/context/TemperatureContext';
import theme from './src/styles/theme';

export default function App() {
  return (
    <>
      <StatusBar style='auto' backgroundColor={theme.app.mainColor}></StatusBar>
      <TemperatureProvider>
        <RootSlidingNavigator />
      </TemperatureProvider>
    </>
  );
}
