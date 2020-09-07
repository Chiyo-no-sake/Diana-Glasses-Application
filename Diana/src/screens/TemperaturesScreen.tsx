import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-elements';
import Card from '../components/misc/Card';
import FloatingCircle from '../components/misc/FloatingCircle';
import { Feather } from '@expo/vector-icons';
import ChartsManagerContainer from '../components/charts/chartsManager/ChartsManagerContainer';
import theme from '../styles/theme';

const TemperatureScreen = () => {
  return (
    <LinearGradient
      style={styles.wall}
      start={{ x: 0.5, y: -0 }}
      end={{ x: 0.5, y: 1 }}
      colors={theme.app.screenBackgroundGradient}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <ChartsManagerContainer />
          </Card>
          <View>
            <FloatingCircle>
              <Feather
                name='plus'
                size={42}
                color={theme.app.plusIconColor}
              ></Feather>
            </FloatingCircle>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

// TODO: add iOS shadow props !!!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 50,
  },
  wall: {
    flex: 1,
  },
  card: {
    height: 240,
    marginHorizontal: 13,
    marginBottom: 5,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  title: {
    color: '#444',
    margin: 10,
  },
});

export default TemperatureScreen;
