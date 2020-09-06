import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

const GradientDefs = () => {
  return (
    <Defs>
      <LinearGradient id='LOW_VAL' x1={0} x2={1} y1={0} y2={1}>
        <Stop offset={0} stopColor='#a1c4fd' />
        <Stop offset={1} stopColor='#c2e9fb' />
      </LinearGradient>
      <LinearGradient id='OK_VAL' x1={0} x2={1} y1={0} y2={1}>
        <Stop offset={0} stopColor='#d4fc79' />
        <Stop offset={1} stopColor='#96e6a1' />
      </LinearGradient>
      <LinearGradient id='MED_VAL' x1={0} x2={1} y1={0} y2={1}>
        <Stop offset={0} stopColor='#f6d365' />
        <Stop offset={1} stopColor='#fda085' />
      </LinearGradient>
      <LinearGradient id='HIGH_VAL' x1={0} x2={1} y1={0} y2={1}>
        <Stop offset={0} stopColor='#ff9a9e' />
        <Stop offset={1} stopColor='#fe4f4f' />
      </LinearGradient>
    </Defs>
  );
};

export default GradientDefs;
