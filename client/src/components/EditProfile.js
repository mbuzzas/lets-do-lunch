import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import '../css/EditProfile.css';

import AboutForm from './AboutForm';
// import AboutMeForm from './AboutMeForm';
import InterestsForm from './InterestsForm';

class EditProfile extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<AboutForm />
					<Divider inset={true} />
					<InterestsForm />
				</div>
			</MuiThemeProvider>
		)
	}
}

export default EditProfile;