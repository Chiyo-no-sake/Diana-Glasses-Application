import gradients from './gradients';
import Defs from './SvgGradientDefs';

//TODO verify all in here and adjust fonts and marginsx
export default {
	app: {
		mainGradient: gradients.BluePurple,
		secondaryGradient: gradients.Orange,
		mainColor: '#b236ff',
		secondaryColor: '#ffb236',
		screenBackgroundGradient: ["#FFF", "#FFF"],
		tabIconsColor: '#FFF',
		tabTextColor: '#FFF',
		plusIconColor: '#FFF',
		font: {
			globalFont: '',
			fontSizeSmall: 12,
			fontSizeMedium: 14,
			fontSizeLarge: 18,
			fontWeightNormal: 'normal',
			fontWeightBold: 'bold',
			baseColor: '#444',
		},
		margins: {
			containers: {
				paddingSmall: 5,
				paddingMedium: 10,
				paddingLarge: 20,
			},
			spacer: {
				small: 5,
				medium: 10,
				large: 20
			},
			modal: {
				top: 400,
				horizontal: 0,
				bottom: 0,
			},

			emptyTopSpace: 50,
			marginSmall: 5,
			marginMedium: 10,
			marginLarge: 20,
		},
		dimensions: {
			card: {
				height: 280,
				borderRadius: 10,
			},
			floatingCircle: {
				radius: 30,
			},
			modal: {
				borderTopRadius: 20,
				borderBottomRadius: 0,
			}
		}
	},
	charts: {
		temperature: {
			lineColor: '#FFF',
			labelsColor: '#FFF',
			textColor: '#FFF',
			nowLineStroke: '#ffb726',
			gradientsDefs: Defs,
			chartBgGradient: gradients.BluePurple,
			dimensions: {
				topBarHeight: 35,
				settingsIconContainerSize: 35,
				settingsIconSize: 24,
				settingsIconBorderRadius: 5,
			},
			margins: {
				titleLeftPadding: 10,
				iconContainerPadding: 3,
			}
		},
	},
	modals: {
		chartSettings: {
			backgroundColor: '#FFF',
		}
	}
};
