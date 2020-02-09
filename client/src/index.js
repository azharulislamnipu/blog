import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
const theme = createMuiTheme({
    palette: {
      primary: {
        main: deepOrange['A400'],
      },
    },
  });

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));

