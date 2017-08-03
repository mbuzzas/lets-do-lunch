import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/Home.css';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import '../css/Home.css';

const style = {
  margin: 12,
};

class Home extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="index">
					<div className="layer">
						<div className="button">
						<FloatingActionButton className="about-button" mini={true} style={style}><ContentAdd /></FloatingActionButton>
						</div>
						<br />
						<div className="home-body">
							<h1>Let's Do Lunch</h1>
							<p className="subtitle">Increase your business or social network while at lunch</p>
							<RaisedButton label="Login" primary={true} style={style} containerElement={<Link to="/login"/>} />
							<RaisedButton label="Signup" primary={true} style={style} containerElement={<Link to="/signup"/>} />
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default Home;