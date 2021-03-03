import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles, AntTab, AntTabs, theme } from './rfq.styles';

const RfqComponent = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const [currency, setCurrency] = useState('');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleSelectChange = (event) => {
		setCurrency(event.target.value);
	};
	return (
		<Paper square className={classes.container}>
			<AntTabs value={value} onChange={handleChange} centered>
				<AntTab label='Sell' />
				<AntTab label='Buy' />
			</AntTabs>
			<div className={classes.selectContainer}>
				<FormControl variant='filled' className={classes.formControl} size='small'>
					<InputLabel>Currency</InputLabel>
					<Select onChange={handleSelectChange} value={currency}>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>BTC</MenuItem>
						<MenuItem value={20}>ETH</MenuItem>
						<MenuItem value={30}>USD</MenuItem>
					</Select>
				</FormControl>
				<TextField label='Quantity' variant='filled' size='small' />
			</div>
			<div className={classes.buttonContainer}>
				<ThemeProvider theme={theme}>
					<Button variant='contained' color='primary'>
						Add
					</Button>
				</ThemeProvider>
			</div>
		</Paper>
	);
};

export default RfqComponent;
