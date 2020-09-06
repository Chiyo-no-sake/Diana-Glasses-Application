import React from 'react';
import { View, StyleSheet } from 'react-native';
import TemperatureChartContainer from '../temperature/TemperatureChartContainer';

type Props = {
  dataFrom: Date;
  dataTo: Date;
  labelingType: 'weekLike' | 'monthLike';
};

const ChartsManager = ({ dataFrom, dataTo, labelingType }: Props) => {
  return (
    <>
      <View style={styles.container}>
        {
          //TODO ADD Scroll Horizontal
        }
        <View style={styles.topBar}></View>
        <TemperatureChartContainer
          dataFrom={dataFrom}
          dataTo={dataTo}
          labelingType={labelingType}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
  },
});

ChartsManager.defaultProps = {
  labelCount: 'each',
};

export default ChartsManager;
