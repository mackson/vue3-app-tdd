const theme = {
  defaultTheme: 'light',
  themes: {
    light: {
      dark: false,
      colors: {
        'primary': '#4B089F',
        'secondary': '#DE3059',
        'on-secondary': '#fff',
        'success': '#56CA00',
        'info': '#1976D2',
        'warning': '#FFB400',
        'error': '#FF4C51',
        'on-primary': '#FFFFFF',
        'on-success': '#FFFFFF',
        'on-warning': '#FFFFFF',
        'background': '#F4F5FA',
        'on-background': '#3A3541',
        'on-surface': '#3A3541',
        'grey-50': '#FAFAFA',
        'grey-100': '#F5F5F5',
        'grey-200': '#EEEEEE',
        'grey-300': '#E0E0E0',
        'grey-400': '#BDBDBD',
        'grey-500': '#9E9E9E',
        'grey-600': '#757575',
        'grey-700': '#616161',
        'grey-800': '#424242',
        'grey-900': '#212121',
        'white-f2': '#fff',
        'grey-f2': '#707070',
        'grey-light-f2': '#aaa',
        'red-f2': '#B90000',
        'blue-f2': '#37639c',
        'disabled-f2':'#4B089F33',
        'text-hover-f2': '#FFFFFF66',
        'portugues-f2:':'#1976D2',
        'matematica-f2':'#6926BD',
        'ciencias-f2':'#03A400',
        'historia-f2': '#E38B04',
        'ingles-f2':'#AD2000',
        'artes-f2':'#DE3059',
      },
      variables: {
        'border-color': '#3A3541',
        'medium-emphasis-opacity': 0.68,

        // Shadows
        'shadow-key-umbra-opacity': 'rgba(var(--v-theme-on-surface), 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(var(--v-theme-on-surface), 0.12)',
        'shadow-key-ambient-opacity': 'rgba(var(--v-theme-on-surface), 0.04)',
      },
    },
    dark: {
      dark: true,
      colors: {
        'primary': '#9155FD',
        'secondary': '#8A8D93',
        'on-secondary': '#fff',
        'success': '#56CA00',
        'info': '#16B1FF',
        'warning': '#FFB400',
        'error': '#FF4C51',
        'on-primary': '#FFFFFF',
        'on-success': '#FFFFFF',
        'on-warning': '#FFFFFF',
        'background': '#28243D',
        'on-background': '#E7E3FC',
        'surface': '#312D4B',
        'on-surface': '#222',
        'grey-50': '#2A2E42',
        'grey-100': '#2F3349',
        'grey-200': '#4A5072',
        'grey-300': '#5E6692',
        'grey-400': '#7983BB',
        'grey-500': '#8692D0',
        'grey-600': '#AAB3DE',
        'grey-700': '#B6BEE3',
        'grey-800': '#CFD3EC',
        'grey-900': '#E7E9F6',
      },
      variables: {
        'border-color': '#222',
        'medium-emphasis-opacity': 0.68,

        // Shadows
        'shadow-key-umbra-opacity': 'rgba(20, 18, 33, 0.08)',
        'shadow-key-penumbra-opacity': 'rgba(20, 18, 33, 0.12)',
        'shadow-key-ambient-opacity': 'rgba(20, 18, 33, 0.04)',
      },
    },
  },
}
export default theme