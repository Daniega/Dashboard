import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CropFreeIcon from '@material-ui/icons/CropFree';
import CloseIcon from '@material-ui/icons/Close';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

//components
import TableComponent from '../table/table.component';

//styles
import useStyles from './widget.styles';

const Widget = () => {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<div className={classes.header}>
				<div className={classes.text}>
					<CropFreeIcon className={classes.icon} />
					<FiberManualRecordIcon className={classes.iconGreen} />
					<p className={classes.paragraph}>Trades</p>
				</div>
				<div className={classes.options}>
					<OpenWithIcon className={classes.icon} />
					<CloseIcon className={classes.icon} />
				</div>
			</div>
			<CardContent className={classes.content}>
				{/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
				has been the industry's standard dummy text ever since the 1500s, when an unknown
				printer took a galley of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into electronic typesetting,
				remaining essentially unchanged. It was popularised in the 1960s with the release of
				Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
				<TableComponent />
			</CardContent>
		</Card>
	);
};

export default Widget;
