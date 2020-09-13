import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Card from '../components/custom_views/Card';
import FloatingCircle from '../components/custom_views/FloatingCircle';
import {Feather} from '@expo/vector-icons';
import ChartsManagerContainer
	from '../components/charts/charts-manager/ChartsManagerContainer';
import theme from '../../styles/theme';

const TemperatureScreen = () => {
	return (
		<LinearGradient
			style={styles.wall}
			start={{x: 0.5, y: -0}}
			end={{x: 0.5, y: 1}}
			colors={theme.app.screenBackgroundGradient}
		>
			<View style={styles.container}>
				<Card
					style={styles.card}
					backgroundGradient={theme.charts.temperature.chartBgGradient}
					startGradient={{x: -0.5, y: -0.5}}
					endGradient={{x: 1.3, y: 1.3}}
				>
					<ChartsManagerContainer/>
				</Card>
				<FloatingCircle
					style={styles.floatingCircle}>
					<Feather
						name='plus'
						size={42}
						color={theme.app.plusIconColor}
					/>
				</FloatingCircle>
			</View>
		</LinearGradient>
	);
};

// TODO: add iOS shadow props !!!
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		marginTop: theme.app.margins.emptyTopSpace,
		height: '100%',
		paddingHorizontal: theme.app.margins.containers.paddingMedium,
	},
	wall: {
		flex: 1,
	},
	card: {
		height: theme.app.dimensions.card.height,
		padding: theme.app.margins.containers.paddingMedium,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
	floatingCircle: {
		position: "absolute",
		bottom: theme.app.margins.marginMedium,
		right: theme.app.margins.marginMedium,
	}
});

export default TemperatureScreen;
