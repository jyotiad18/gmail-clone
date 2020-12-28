import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { IconButton, Avatar } from '@material-ui/core';

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img src="" alt="" />
			</div>
			<div className="header__middle">
				<SearchIcon />
				<input type="text" placeholder="Search mail" />
				<ArrowDownwardIcon className="header__inputCaret" />
			</div>
			<div className="header__right">
				<IconButton>
					 <AppsIcon />
				</IconButton>
				<IconButton>
					 <NotificationsIcon />
				</IconButton>
				<Avatar />
		   </div>

		</div>
	)
}

export default Header;
