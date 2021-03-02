import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

const whiteColor = '#fff';

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<DashboardIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Dashboard' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<ShoppingCartIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Orders' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PeopleIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Customers' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<BarChartIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Reports' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Integrations' />
		</ListItem>
	</div>
);
