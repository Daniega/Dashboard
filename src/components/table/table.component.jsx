import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
	table: {
		minWidth: 400,
	},
});

const StyledTableCell = withStyles((theme) => ({
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

const TableComponent = () => {
	const classes = useStyles();

	return (
		<Table className={classes.table} size='small' aria-label='a dense table'>
			<TableHead>
				<TableRow>
					<StyledTableCell>Dessert</StyledTableCell>
					<StyledTableCell align='left'>Calories</StyledTableCell>
					<StyledTableCell align='left'>Fat</StyledTableCell>
					<StyledTableCell align='left'>Carbs</StyledTableCell>
					<StyledTableCell align='left'>Protein</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row) => (
					<TableRow key={row.name}>
						<StyledTableCell component='th' scope='row'>
							{row.name}
						</StyledTableCell>
						<StyledTableCell align='left'>{row.calories}</StyledTableCell>
						<StyledTableCell align='left'>{row.fat}</StyledTableCell>
						<StyledTableCell align='left'>{row.carbs}</StyledTableCell>
						<StyledTableCell align='left'>{row.protein}</StyledTableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default TableComponent;
