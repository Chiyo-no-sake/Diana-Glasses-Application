import React from 'react';
import { View, StyleSheet } from 'react-native';
import TemperatureChartContainer from '../temperature/TemperatureChartContainer';
import DropDownMenu from '../../misc/DropDownMenu/DropDownMenu';
import theme from '../../../styles/theme';
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
        <View style={styles.topBar}>
          <DropDownMenu
            backgroundGradient={theme.charts.temperature.selectedViewBgGradient}
            values={['This Week', 'This Month']}
            defaultValueIndex={1}
            selectedDimmedGradient={
              theme.charts.temperature.selectedViewBGGradientDimmed
            }
            width={100}
            height={30}
            fontSize={11}
          />
        </View>
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
    height: 20,
    marginHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

ChartsManager.defaultProps = {
  labelCount: 'each',
};

export default ChartsManager;
