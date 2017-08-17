import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Profile extends React.Component {

	constructor() {
		super();

		this.state = {
			users: {},
		};
	}

	render() {
		return (
			<Card>
				<CardHeader title="Bob Smith"/>
				<CardMedia></CardMedia>
				<CardTitle title="Job Title" />
				<CardText>
					I love to cook, play sports and develop websites.
				</CardText>
				<CardText>
					<ul>Interests
						<li>Food</li>
						<li>Cooking</li>
						<li>Web Development</li>
					</ul>
				</CardText>
				<CardActions>
					<RaisedButton label="Edit Profile" containerElement={<Link to="/editProfile"/>}/>
				</CardActions>
			</Card>
		)
	}
}

export default Profile;