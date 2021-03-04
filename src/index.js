import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<App />
	</ThemeProvider>,
	rootElement
);
