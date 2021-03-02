import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { mainListItems } from '../listItems';
import useStyles from './dashboard.styles.js';

const Dashboard = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });
	const [date] = useState({
		day: new Date().getDay(),
		month: new Date().getMonth(),
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

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}>
						<MenuIcon />
					</IconButton>
					<Typography component='h1' variant='h6' color='inherit' noWrap>
						Dashboard
					</Typography>
					<div className={classes.clockHeader}>
						<Typography className={classes.clock} variant='h6'>
							{time.hours}:{time.minutes}:{time.seconds}
						</Typography>
						<Typography>
							{date.day} / {date.month} / {date.year}
						</Typography>
					</div>
					<div className={classes.userMenu}>
						<AccountCircle className={classes.accountCircle} />
						<Typography className={classes.userNameText}>Hello Yedidia!</Typography>
						<KeyboardArrowDownIcon />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
				color={theme.primary}>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon style={{ color: '#fff' }} />
					</IconButton>
				</div>
				<Divider />
				<List className={classes.listStyle}>{mainListItems}</List>
			</Drawer>
		</div>
	);
};

export default Dashboard;
