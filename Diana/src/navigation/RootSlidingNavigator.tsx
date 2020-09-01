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
        iconContainerStyle={styles.iconContainer}
        renderHighlighted={<TempIcon highlighted />}
      >
        <TemperatureScreen />
      </Screen>
      <Screen
        name='Profile'
        renderIcon={<ProfileIcon />}
        renderHighlighted={<ProfileIcon highlighted />}
        iconContainerStyle={styles.iconContainer}
      >
        <ProfileScreen />
      </Screen>
    </SlidingTabNavigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tabStyle: {
    elevation: 10,
  },
});

export default RootSlidingNavigator;
