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
		MuiCardContent: {
			root: {
				padding: 0,
				backgroundColor: '#fff',
				'&:last-child': {
					paddingBottom: 0,
				},
			},
		},
		MuiSelect: {
			root: {
				color: '#fff',
				backgroundColor: '#fffff',
			},
		},
		MuiFormLabel: {
			root: {
				color: '#fffff',
				'&$focused': {
					color: '#fffff',
				},
			},
		},
		MuiTextField: {
			root: {
				color: '#fffff',
				width: 200,
				'&:focus': {
					color: '#fffff',
				},
			},
		},
		MuiInputBase: {
			root: {
				color: '#fffff',
				width: 200,
				'&:focus': {
					color: '#fffff',
				},
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
		neutral: {
			main: '#11cb5f',
		},
	},
});

export default theme;
