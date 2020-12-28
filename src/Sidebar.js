import React from 'react';
import './Sidebar.css';
import { Button, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import SnoozeIcon from '@material-ui/icons/Snooze';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
	return (
		<div className="sidebar">
			<Button startIcon={<AddIcon fontSize='large' className='sidebar__compose' />}>
				Compose
			</Button>
			<SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
			<SidebarOption Icon={StarIcon} title="Starred" number={54} />
			<SidebarOption Icon={SnoozeIcon} title="Snoozed" number={54} />
			<SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
			<SidebarOption Icon={SendIcon} title="Sent" number={54} />
			<SidebarOption Icon={DraftsIcon} title="Draft" number={54} />
			<SidebarOption Icon={CategoryIcon} title="Categories" number={54} />			

			<div className="sidebar__footer">
				<div className="sidebar__footerIcons">
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				 </div>
			</div>
		</div>
	)
}

export default Sidebar;
