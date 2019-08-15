import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"M PLUS Rounded 1c"'].join(','),
  },
});

export default responsiveFontSizes(theme);
