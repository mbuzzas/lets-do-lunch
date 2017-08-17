import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

// import '../css/Navbar.css';


const styles = {
	appBar: {
        flexWrap: 'wrap',
        
    },
	tabs: {
		float: 'left',
        width: '60%'
    }
}

class NavBar extends React.Component {
	render() {
		return(
			<AppBar className="navbar" style={styles.appBar} iconElementLeft={<img alt="logo" src='../images/logo.png' />} showMenuIconButton={false}>
				<Tabs style={styles.tabs}>
					<Tab label='Matches' containerElement={<Link to="/home"/>} />
					<Tab label='Profile' containerElement={<Link to="/profile"/>} />
					<Tab label='Meetings' containerElement={<Link to="/meetings"/>} />
				</Tabs>
			</AppBar>
		)
	}
}
export default NavBar;