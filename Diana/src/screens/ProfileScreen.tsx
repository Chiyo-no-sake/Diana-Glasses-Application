import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../styles/theme';
import {Text} from 'react-native-elements';

const ProfileScreen = () => {
	return (
		<LinearGradient
			style={styles.wall}
			start={{x: 0.5, y: 0}}
			end={{x: 0.5, y: 1}}
			colors={theme.app.screenBackgroundGradient}
		>
			<View style={styles.container}>
				<Text h4 style={styles.title}>
					I'm Profile Screen
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
		color: '#444',
		margin: 10,
	},
});

export default ProfileScreen;
