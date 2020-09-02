import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { wallGradients } from '../styles/gradients';
import { Text } from 'react-native-elements';
import Card from '../components/misc/Card';
import FloatingCircle from '../components/misc/FloatingCircle';
import { Feather } from '@expo/vector-icons';

const TemperatureScreen = () => {
  return (
    <LinearGradient
      style={styles.wall}
      start={{ x: 0.5, y: -0 }}
      end={{ x: 0.5, y: 1 }}
      colors={wallGradients.Cloudy}
    >
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.title}>Graph Here</Text>
        </Card>
        <View>
          <FloatingCircle>
            <Feather name='plus' size={42} color='#FFF'></Feather>
          </FloatingCircle>
        </View>
      </View>
    </LinearGradient>
  );
};

// TODO: add iOS shadow props !!!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 40,
  },
  wall: {
    flex: 1,
  },
  card: {
    height: 300,
    marginHorizontal: 13,
    marginBottom: 5,
  },
  title: {
    color: '#444',
    margin: 10,
  },
});

export default TemperatureScreen;
