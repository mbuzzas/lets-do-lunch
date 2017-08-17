import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';

import '../css/EditProfile.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const renderTextField = ({type, label, input, meta: {touched, error} }) => (
  <div>
    <TextField
      type={type}
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
    />
  </div>
)

const renderRadioGroup = ({ input, ...rest }) =>
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
  />

class AboutMeForm extends React.Component {

	constructor(props){
    	super(props);

	    this.state={
			title: '',
			age: '',
			gender: '',
			zipcode: ''
		}

		this.submitAbout = this.submitAbout.bind(this);
		this.submit = this.submit.bind(this);
	}

	submitAbout(title, age, gender, zipcode) {
	    return fetch('/signup/:id', {
	      method: 'PUT',
	      headers: {
	        'Content-type': 'application/json',
	      },
	      body: JSON.stringify({
	        title: title,
	        age: age,
	        gender: gender,
	        zipcode: zipcode}),
	    })
	    .then((response) => response.json())
	    .then((responseJson) => {
	      return responseJson;
	    })
	    .catch((error) => {
	      console.error(error);
	    });
	}

	submit(values) {

		let error = {};
		let isError = false;
		let requiredFields = ['title', 'age', 'gender', 'zipcode']

		requiredFields.forEach(field => {
			if(!values[field]) {
				error[field] = 'Required'
			}
		})
		if (
			values.zipcode &&
			/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values.zipcode)
		) {
			error.zipcode = 'Invalid ZIP code'
		}
		if (isError) {
			throw new SubmissionError(error);
		} else {
			//submit to server
			this.submitAbout(values.title, values.age, values.gender, values.zipcode)
				.then(data => console.log(data))
			// console.log(values);
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<form className="aboutMe" onSubmit={ this.props.handleSubmit(this.submit) }>
			        <Field
						name="title"
	                  	component={renderTextField}
	                 	label="Title"
	                 	type="text"
			        />
			        <Field
						name="age"
	                  	component={renderTextField}
	                 	label="Age"
	                 	type="number"
			        />
			        <div>
			        <Field name="gender" component={renderRadioGroup} >
						<RadioButton value="male" label="Male" style={styles.radioButton} />
						<RadioButton value="female" label="Female" style={styles.radioButton} />
			        </Field>
			        </div>
			        <Field
						name="zipcode"
	                  	component={renderTextField}
	                 	label="ZIP Code"              
	                 	type="text"
					/>
			        <RaisedButton className="save-button" type="submit" label="Save" onTouchTap={(event) => this.props.handleSubmit(this.submit)} />
				</form>
			</MuiThemeProvider>
		)
	}
}

AboutMeForm = reduxForm({
	form: 'aboutForm'
})(AboutMeForm)

export default AboutMeForm;

