import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ReorderIcon from '@material-ui/icons/Reorder';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

const whiteColor = '#fff';
//listItems for showing Icons in Drawer component (inside Dashboard)
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
				<ReorderIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Integrations' />
		</ListItem>

		<ListItem button>
			<ListItemIcon>
				<SwapHorizIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Swap' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PersonIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='Person' />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PeopleAltIcon style={{ color: whiteColor }} />
			</ListItemIcon>
			<ListItemText primary='People' />
		</ListItem>
	</div>
);
