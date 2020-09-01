import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { wallGradients } from '../styles/gradients';
import { Text } from 'react-native-elements';

const TemperatureScreen = () => {
  return (
    <LinearGradient
      style={styles.wall}
      start={{ x: 0.5, y: -0.4 }}
      end={{ x: 0.5, y: 1.4 }}
      colors={wallGradients.JShine}
    >
      <View style={styles.container}>
        <Text h4 style={styles.title}>
          I'm Temp Screen
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  wall: {
    flex: 1,
  },
  title: {
    color: '#FFF',
    margin: 10,
  },
});

export default TemperatureScreen;
