import React from 'react';
import Widget from '../widget/widget.component';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		marginTop: '70px',
		marginLeft: '5px',
		padding: 0,
		width: '100%',
	},
});

const Content = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Grid container>
				<Grid item xs={12} md={4}>
					<Widget componentType='Table'></Widget>
				</Grid>
				<Grid item xs={3} md={3}>
					<Widget componentType='Rfq'></Widget>
				</Grid>
			</Grid>
		</div>
	);
};

export default Content;
