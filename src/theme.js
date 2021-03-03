import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#1a1a1a',
				},
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: '#262626',
				color: '#fff',
			},
		},
	},
	palette: {
		primary: {
			main: '#323232',
		},
		secondary: {
			main: '#262626',
		},
		addition: {
			main: '#0197e4',
		},
		white: {
			main: '#fff',
		},
	},
});

export default theme;
