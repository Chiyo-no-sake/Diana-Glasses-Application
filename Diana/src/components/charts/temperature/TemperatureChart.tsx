import React from 'react';
import { StyleSheet } from 'react-native';
import ChartComponentContainer from '../ChartComponentContainer';
import { DataType } from '../../../context/TemperatureContext';
import CircleTemperatureDecorator from './CircleTemperatureDecorator';

type Props = {
  inRangeData: DataType[];
  labelDates: Date[];
  labelXAccessor: (item: Date) => string;
  labelEach?: 'day' | 'week' | 'month';
};

type State = {};

const TemperatureChart = ({
  inRangeData,
  labelDates,
  labelXAccessor,
}: Props) => {
  return (
    <ChartComponentContainer<DataType, Date>
      style={styles.chart}
      data={inRangeData}
      dataLabels={labelDates}
      dataXAccessor={(item: DataType) => item.date.getTime()}
      dataYAccessor={(item: DataType) => item.temp_C}
      labelXAccessor={(item: Date) => item.getTime()}
      labelTextAccessor={labelXAccessor}
      decorator={
        <CircleTemperatureDecorator
          blueColorLimit={36}
          greenColorLimit={37.2}
          orangeColorLimit={37.7}
          xAccessor={(value: DataType) => value.date.getTime()}
          yAccessor={(value: DataType) => value.temp_C}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  verticalLayoutContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  horizontalLayoutContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  chart: {
    flex: 1,
  },
});

export default TemperatureChart;
