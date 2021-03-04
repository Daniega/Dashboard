import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//styles
import { StyledTableCell, useStyles } from './table.styles';

//structure of data
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}
//dummy data for table, array of objects using createData function
const rows = [
	createData('Client_test', 159, 6.0, 'BTC-USD', 4.0),
	createData('Broker_test', 237, 9.0, 'BTC-EUR', 4.3),
	createData('Client_test_qa', 262, 16.0, 'EUR-USD', 6.0),
	createData('Client_test_devops', 305, 3.7, 'XRP-USD', 4.3),
	createData('Client_test_back', 356, 16.0, 'ETH-USD', 3.9),
];
//Component for rendering table with data
const TableComponent = () => {
	const classes = useStyles();

	return (
		<Table className={classes.table} size='small' aria-label='a dense table'>
			<TableHead>
				<TableRow>
					<StyledTableCell>Username</StyledTableCell>
					<StyledTableCell align='left'>Quantity</StyledTableCell>
					<StyledTableCell align='left'>Price</StyledTableCell>
					<StyledTableCell align='left'>Product</StyledTableCell>
					<StyledTableCell align='left'>Sales PL</StyledTableCell>
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
