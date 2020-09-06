import React, { ReactElement } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import CircleTemperatureDecorator from './temperature/CircleTemperatureDecorator';
import * as shape from 'd3-shape';
import theme from '../../styles/theme';

const strokeColor = theme.charts.temperature.lineColor;

type Props<DataType, LabelType> = {
  data: DataType[];
  dataXAccessor: (item: DataType) => number;
  dataYAccessor: (item: DataType) => number;
  dataLabels: LabelType[];
  labelXAccessor: (item: LabelType) => number;
  labelTextAccessor?: (item: LabelType) => string;
  labelXMax: number;
  labelXMin: number;
  bezier?: boolean;
  style?: StyleProp<ViewStyle>;
  decorator?: ReactElement;
};

const ChartComponent = <DataType, LabelType>(
  props: Props<DataType, LabelType>
) => {
  return (
    <View style={styles.container}>
      <View style={styles.verticalLayoutContainer}>
        <View style={styles.horizontalLayoutContainer}>
          <YAxis
            numberOfTicks={5}
            data={props.data}
            yAccessor={({ item }) => props.dataYAccessor(item)}
            svg={{ fontSize: 10, fill: theme.charts.temperature.labelsColor }}
            contentInset={{ top: 10, bottom: 10 }}
            style={{ flex: 0.1, marginRight: 5 }}
          ></YAxis>
          <LineChart
            style={props.style}
            data={props.data}
            xAccessor={({ item }) => props.dataXAccessor(item)}
            yAccessor={({ item }) => props.dataYAccessor(item)}
            svg={{ stroke: strokeColor, strokeWidth: 2 }}
            contentInset={{ top: 10, left: 0, right: 30, bottom: 10 }}
            curve={props.bezier ? shape.curveNatural : shape.curveLinear}
            xMax={props.labelXMax}
            xMin={props.labelXMin}
          >
            <Grid />
            {props.decorator}
          </LineChart>
        </View>
        <XAxis
          data={props.dataLabels}
          xAccessor={({ item }) => props.labelXAccessor(item)}
          formatLabel={(value, index) =>
            props.labelTextAccessor
              ? props.labelTextAccessor(props.dataLabels[index])
              : props.labelXAccessor(props.dataLabels[index])
          }
          contentInset={{ left: 50, right: 25 }}
          svg={{
            fontSize: 10,
            fill: theme.charts.temperature.labelsColor,
            alignmentBaseline: 'top',
            textAnchor: 'middle',
          }}
        ></XAxis>
      </View>
    </View>
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
    alignItems: 'stretch',
  },
  horizontalLayoutContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ChartComponent;
