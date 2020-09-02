import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import SlidingTabNavigator, {
  Screen,
} from '../components/SlidingTabNav/SlidingTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import TemperatureScreen from '../screens/TemperaturesScreen';
import { colors } from '../styles/colors';

type IconProps = {
  highlighted?: boolean;
};

const TempIcon = ({ highlighted }: IconProps) => (
  <FontAwesome
    name='thermometer-3'
    size={24}
    color={highlighted ? colors.MAIN : 'black'}
  />
);

const ProfileIcon = ({ highlighted }: IconProps) => (
  <Fontisto
    name='person'
    size={24}
    color={highlighted ? colors.MAIN : 'black'}
  />
);

const RootSlidingNavigator = () => {
  return (
    <SlidingTabNavigator
      scrollable
      initialRouteName='Temperatures'
      tabStyle={styles.tabStyle}
    >
      <Screen
        name='Temperatures'
        renderIcon={<TempIcon />}
        iconStyle={{ elevation: 25 }}
        iconContainerStyle={styles.iconContainer}
        renderHighlighted={<TempIcon highlighted />}
        label='Temperature'
      >
        <TemperatureScreen />
      </Screen>
      <Screen
        name='Profile'
        renderIcon={<ProfileIcon />}
        renderHighlighted={<ProfileIcon highlighted />}
        iconContainerStyle={styles.iconContainer}
        label='Your Data'
        labelStyle={{ color: '#555' }}
      >
        <ProfileScreen />
      </Screen>
    </SlidingTabNavigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    width: 100,
  },
  tabStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    justifyContent: 'space-evenly',
  },
});

export default RootSlidingNavigator;
