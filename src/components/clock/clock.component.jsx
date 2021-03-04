import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

//styles
import { useStyles } from './clock.styles';

//Clock component to show clock widget on top of AppBar
const Clock = () => {
	const classes = useStyles();
	const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });
	const [date] = useState({
		day: new Date().getDate(),
		month: new Date().getMonth() + 1,
		year: new Date().getFullYear(),
	});
	//update time function for updaing "time" state
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
		setTime({ hours, minutes, seconds });
	};

	useEffect(() => {
		var timerID = setInterval(() => updateTime(), 1000); //updting the time every second
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
