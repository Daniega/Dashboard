import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	clockHeader: {
		margin: '0 auto',
		width: 'auto',
		alignSelf: 'stretch',
		maxWidth: '250px',
		flexGrow: 2,
		backgroundColor: '#434343',
		display: 'flex',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
});

const Clock = () => {
	const classes = useStyles();

	const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });
	const [date] = useState({
		day: new Date().getDay(),
		month: new Date().getMonth() + 1,
		year: new Date().getFullYear(),
	});

	const updateTime = () => {
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();
		if (seconds < 10) {
			seconds = `0${seconds}`;
		}
		if (hours < 10) {
			hours = `0${hours}`;
		}
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
		setTime({ hours: hours, minutes: minutes, seconds: seconds });
	};

	useEffect(() => {
		var timerID = setInterval(() => updateTime(), 1000);
		return function cleanup() {
			clearInterval(timerID);
		};
	});
	return (
		<div className={classes.clockHeader}>
			<Typography variant='h6'>
				{time.hours}:{time.minutes}:{time.seconds}
			</Typography>
			<Typography>
				{date.day} / {date.month} / {date.year}
			</Typography>
		</div>
	);
};

export default Clock;
