import React from 'react';
import Widget from '../widget/widget.component';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		marginTop: '70px',
		marginLeft: '5px',
	},
});

const Content = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.container}>
			<Grid item xs={4}>
				<Widget></Widget>
			</Grid>
			<Grid item xs={3}>
				<Widget></Widget>
			</Grid>
		</Grid>
	);
};

export default Content;
