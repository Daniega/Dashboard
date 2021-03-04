import React, { useState } from 'react';
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
//styles
import useStyles from './dashboard.styles.js';
//components
import Content from '../content/content.container';
import Clock from '../clock/clock.component';

//Dashboard component, including AppBar, Drawer and Content Component
const Dashboard = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	//handle Drawer click to open Drawer
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	//handle Drawer click to close Drawer
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
					<Clock />
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
			<Content />
		</div>
	);
};

export default Dashboard;
