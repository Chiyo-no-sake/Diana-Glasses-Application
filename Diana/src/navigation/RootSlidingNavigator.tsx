import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import theme from '../../styles/theme';

import SlidingTabNavigator, {
  Screen,
} from '../components/slidingTabNavigator/index';
import ProfileScreen from '../screens/ProfileScreen';
import TemperatureScreen from '../screens/TemperaturesScreen';

type IconProps = {
  highlighted?: boolean;
};

const TempIcon = ({highlighted}: IconProps) => (
  <FontAwesome name='thermometer-3' size={24}
               color={theme.app.tabIconsColor}/>
);

const ProfileIcon = ({highlighted}: IconProps) => (
  <Fontisto
    name='person'
    size={23}
    color={theme.app.tabIconsColor} //{highlighted ? colors.LIGHTBLUE :
    // colors.LIGHTGREY}
  />
);

const RootSlidingNavigator = () => {
  return (
    <SlidingTabNavigator
      scrollable
      initialRouteName='Temperatures'
      tabStyle={styles.tabStyle}
      withGradient
      gradient={theme.app.mainGradient}
    >
      <Screen
        name='Temperatures'
        renderIcon={<TempIcon/>}
        iconStyle={{elevation: 25}}
        iconContainerStyle={styles.iconContainer}
        renderHighlighted={<TempIcon highlighted/>}
        label='Temperature'
        labelStyle={{color: theme.app.tabTextColor}}
      >
        <TemperatureScreen/>
      </Screen>
      <Screen
        name='Profile'
        renderIcon={<ProfileIcon/>}
        renderHighlighted={<ProfileIcon highlighted/>}
        iconContainerStyle={styles.iconContainer}
        label='Your Data'
        labelStyle={{color: theme.app.tabTextColor}}
      >
        <ProfileScreen/>
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
    justifyContent: 'center',
  },
  tabContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 20,
  },
});

export default RootSlidingNavigator;
