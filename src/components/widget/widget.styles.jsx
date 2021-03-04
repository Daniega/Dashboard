import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	overrides: {
		MuiCardContent: {
			root: {
				padding: 0,
			},
		},
	},
	root: {
		minWidth: 275,
		margin: '0 2px',
	},

	header: {
		height: 'fit-content',
		display: 'flex',
		justifyContent: 'space-between',
	},
	paragraph: {
		marginBlockStart: 0,
		marginBlockEnd: 0,
		float: 'right',
		marginLeft: '5px',
	},
	text: {
		width: 'fit-content',
		backgroundColor: theme.palette.primary.main,
		padding: '3px 10px',
		overflow: 'hidden',
	},
	pos: {
		marginBottom: 12,
	},
	content: {
		backgroundColor: '#000',
		padding: 0,
		overflow: 'auto',
	},
	icon: {
		fontSize: '12px',
		margin: '0 5px',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	iconGreen: {
		fontSize: '12px',
		margin: '0 5px',
		color: '#41ad6f',
	},
	options: {
		padding: '3px 10px',
		overflow: 'hidden',
		width: 'fit-content',
	},
}));

export default useStyles;
