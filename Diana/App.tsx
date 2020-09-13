import React from 'react';
import {Provider as TemperatureProvider} from './src/context/TemperatureContext';
import RootSlidingNavigator from "./src/navigation/RootSlidingNavigator";
import {StatusBar} from "react-native";

const App = () => {
  return (
    <>
      <StatusBar barStyle={"default"} translucent animated
                 showHideTransition={"slide"}
      />
      <TemperatureProvider>
        <RootSlidingNavigator/>
      </TemperatureProvider>
    </>

  );
};

export default App;
;
