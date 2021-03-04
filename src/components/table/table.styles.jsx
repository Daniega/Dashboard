import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export const useStyles = makeStyles({
	table: {
		minWidth: 400,
	},
});

export const StyledTableCell = withStyles((theme) => ({
	head: {
		color: theme.palette.common.white,
	},
	root: {
		borderBottom: 'none',
	},
	body: {
		color: theme.palette.common.white,
	},
}))(TableCell);
