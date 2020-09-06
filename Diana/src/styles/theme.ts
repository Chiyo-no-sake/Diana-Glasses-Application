import colors from './colors';
import gradients from './gradients';
import Defs from './SvgGradientDefs';

export default {
  app: {
    mainGradient: gradients.Firewatch,
    mainColor: '',
    tabIconsColor: '#FFF',
    tabTextColor: '#FFF',
    plusIconColor: '#FFF',
    screenBackgroundGradient: gradients.Cloudy,
  },
  charts: {
    temperature: {
      lineColor: colors.GREY,
      labelsColor: colors.GREY,
      gradientsDefs: Defs,
    },
  },
};
