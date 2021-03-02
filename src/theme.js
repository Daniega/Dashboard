import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
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
