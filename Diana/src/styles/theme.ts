import colors from './colors';
import gradients from './gradients';
import Defs from './SvgGradientDefs';

export default {
  app: {
    mainGradient: gradients.Firewatch,
    mainColor: 'rgba(252,71,57,1)',
    tabIconsColor: '#FFF',
    tabTextColor: '#FFF',
    plusIconColor: '#FFF',
    screenBackgroundGradient: gradients.Cloudy,
  },
  charts: {
    temperature: {
      lineColor: colors.GREY,
      labelsColor: colors.GREY,
      buttonsColor: colors.LIGHTGREY,
      gradientsDefs: Defs,
      selectedViewBgGradient: gradients.Firewatch,
      selectedViewBGGradientDimmed: gradients.FirewatchTransparent,
    },
  },
};
