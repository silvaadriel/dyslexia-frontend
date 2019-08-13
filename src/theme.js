import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Dosis', 'sans-serif'].join(','),
  },
});

export default responsiveFontSizes(theme);
