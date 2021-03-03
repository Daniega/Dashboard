import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CropFreeIcon from '@material-ui/icons/CropFree';
import CloseIcon from '@material-ui/icons/Close';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

//components
import TableComponent from '../table/table.component';
import RfqComponent from '../rfq/rfq.component';

//styles
import useStyles from './widget.styles';

const Widget = ({ componentType }) => {
	const contentComponent = (type) => {
		if (type === 'Table') {
			return <TableComponent />;
		}
		if (type === 'Rfq') {
			return <RfqComponent />;
		} else return;
	};
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<div className={classes.header}>
				<div className={classes.text}>
					<CropFreeIcon className={classes.icon} />
					<FiberManualRecordIcon className={classes.iconGreen} />
					<p className={classes.paragraph}>{componentType}</p>
				</div>
				<div className={classes.options}>
					<OpenWithIcon className={classes.icon} />
					<CloseIcon className={classes.icon} />
				</div>
			</div>
			<CardContent className={classes.content}>{contentComponent(componentType)}</CardContent>
		</Card>
	);
};

export default Widget;
