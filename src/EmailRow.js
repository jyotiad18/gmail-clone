import React from 'react';
import './EmailRow.css';
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

function EmailRow({ id, title, subject, description, time }) {
	return (
		<div className="emailRow">
			<div className="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarOutlineIcon />
				</IconButton>
				<IconButton>
					<LabelImportantIcon />
				</IconButton>
			</div>
			<h3 className="emailRow__title">				
			</h3>
			<div className="emailRow__message">				
			</div>
			<div className="emailRow__description"></div>
		</div>
	)
}

export default EmailRow;
