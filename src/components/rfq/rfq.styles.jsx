import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { blue } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
	container: {
		width: '100%',
		backgroundColor: theme.palette.primary.main,
		height: 'fir-content',
		alignItems: 'center',
		alignContent: 'center',
	},
	tabs: {
		width: '100%',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
	},
	selectContainer: {
		margin: '0 auto',
		width: '90%',
		textAlign: 'center',
		padding: '10px 0',
	},
	buttonContainer: {
		textAlign: 'center',
		paddingBottom: '10px',
	},
}));

export const AntTab = withStyles((theme) => ({
	root: {
		color: '#fffff',
		'&:hover': {
			color: '#fffff',
			opacity: 1,
		},
		'&$selected': {
			color: '#ff011f',
		},
		'&:focus': {
			color: '#ff011f',
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const AntTabs = withStyles({
	root: {},
	indicator: {
		backgroundColor: '#ff011f',
	},
})(Tabs);

export const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
});
