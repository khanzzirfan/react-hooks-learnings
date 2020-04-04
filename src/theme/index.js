import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      light: 'rgba(51, 171, 159, 1)',
      main: 'rgba(0, 150, 136, 1)',
      dark: 'rgba(0, 105, 95, 1)',
      contrastText: '#fff',
    },
    secondary: {
      light: 'rgba(247, 51, 120, 1)',
      main: 'rgba(245, 0, 87, 1)',
      dark: 'rgba(171, 0, 60, 1)',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: 'rgba(244, 67, 54, 1)',
      dark: 'rgba(211, 47, 47, 1)',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
  },
});
console.log(theme);
export default theme;
