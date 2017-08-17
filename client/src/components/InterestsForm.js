import React from 'react';
import { Link } from 'react-router-dom';
import Checkbox from 'material-ui/Checkbox';
import {GridList} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const styleSheet = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 'auto',
    overflowY: 'auto',
  },
};

class InterestsForm extends React.Component {
	render() {
		return (
			<div className="interestsform" style={styles.block}>
				<div className="hobbies">
					<h3>Check off hobbies that interest you</h3>
					<GridList cellHeight={25} style={styleSheet.gridList} >
					    <Checkbox label="Reading" style={styles.checkbox} />
					    <Checkbox label="Television/Movies" style={styles.checkbox} />
					    <Checkbox label="Family/Kids" style={styles.checkbox} />
					    <Checkbox label="Fishing" style={styles.checkbox} />
					    <Checkbox label="Computer" style={styles.checkbox} />
					    <Checkbox label="Coding" style={styles.checkbox} />
					    <Checkbox label="Gardening" style={styles.checkbox} />
					    <Checkbox label="Exercise" style={styles.checkbox} />
					    <Checkbox label="Music" style={styles.checkbox} />
					    <Checkbox label="Hunting" style={styles.checkbox} />
					    <Checkbox label="Playing Sports" style={styles.checkbox} />
					    <Checkbox label="Shopping" style={styles.checkbox} />
					    <Checkbox label="Traveling" style={styles.checkbox} />
					    <Checkbox label="Sewing/Knitting" style={styles.checkbox} />
					    <Checkbox label="Golf" style={styles.checkbox} />
					    <Checkbox label="Religion" style={styles.checkbox} />
					    <Checkbox label="Arts/Crafts" style={styles.checkbox} />
					    <Checkbox label="Watching Sports" style={styles.checkbox} />
					    <Checkbox label="Bicycling" style={styles.checkbox} />
					    <Checkbox label="Hiking" style={styles.checkbox} />
					    <Checkbox label="Cooking" style={styles.checkbox} />
					    <Checkbox label="Camping" style={styles.checkbox} />
					    <Checkbox label="Skiing/Snowboarding" style={styles.checkbox} />
					    <Checkbox label="Cars" style={styles.checkbox} />
					    <Checkbox label="Writing" style={styles.checkbox} />
					    <Checkbox label="Horseback Riding" style={styles.checkbox} />
					    <Checkbox label="Theater" style={styles.checkbox} />
					    <Checkbox label="Investing" style={styles.checkbox} />
					    <Checkbox label="Home Improvement/DIY" style={styles.checkbox} />
					</GridList>
				</div>
				<div className="sports">
					<h3>Check the sports you watch or participate in</h3>
					<GridList cellHeight={25} style={styleSheet.gridList} >
					    <Checkbox label="Badminton" style={styles.checkbox} />
					    <Checkbox label="Basketball" style={styles.checkbox} />
					    <Checkbox label="Bowling" style={styles.checkbox} />
					    <Checkbox label="Cricket" style={styles.checkbox} />
					    <Checkbox label="Dancing" style={styles.checkbox} />
					    <Checkbox label="Figure Skating" style={styles.checkbox} />
					    <Checkbox label="Golf" style={styles.checkbox} />
					    <Checkbox label="Olympic Sports" style={styles.checkbox} />
					    <Checkbox label="Soccer" style={styles.checkbox} />
					    <Checkbox label="Tennis" style={styles.checkbox} />
					    <Checkbox label="Baseball" style={styles.checkbox} />
					    <Checkbox label="Billiards" style={styles.checkbox} />
					    <Checkbox label="Boxing/UFC/Kickboxing" style={styles.checkbox} />
					    <Checkbox label="Football" style={styles.checkbox} />
					    <Checkbox label="Hockey" style={styles.checkbox} />
					    <Checkbox label="Motorsports" style={styles.checkbox} />
					    <Checkbox label="Volleyball" style={styles.checkbox} />
					    <Checkbox label="Rugby" style={styles.checkbox} />
					</GridList>
				</div>
				<div className="music">
					<h3>Select the music genres you enjoy</h3>
					<GridList cellHeight={25} style={styleSheet.gridList} >
						<Checkbox label="Alternative" style={styles.checkbox} />
					    <Checkbox label="Blues" style={styles.checkbox} />
					    <Checkbox label="Classical" style={styles.checkbox} />
					    <Checkbox label="Country" style={styles.checkbox} />
					    <Checkbox label="Classic Rock" style={styles.checkbox} />
					    <Checkbox label="Dance/Electronic" style={styles.checkbox} />
					    <Checkbox label="Heavy Metal" style={styles.checkbox} />
					    <Checkbox label="Musicals/Soundtracks" style={styles.checkbox} />
					    <Checkbox label="Oldies" style={styles.checkbox} />
					    <Checkbox label="Pop" style={styles.checkbox} />
					    <Checkbox label="Rap" style={styles.checkbox} />
					    <Checkbox label="Rock" style={styles.checkbox} />
					    <Checkbox label="RnB/Hip Hop" style={styles.checkbox} />
					    <Checkbox label="Todays Hits" style={styles.checkbox} />
					</GridList>
				</div>
				<RaisedButton label="Save" fullWidth={true} containerElement={<Link to="/matches"/>} />
			</div>
		)
	}
}

export default InterestsForm;