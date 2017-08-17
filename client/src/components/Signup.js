import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import '../css/Signup.css';


// const renderField = ({type, label, input, meta: {touched, error} }) => (
//   <div className="input-row">
//     <label>{label}</label>
//     <input {...input} type={type}/>
//     {touched && error && <span className="error">{error}</span>}
//   </div>
// )

const style = {
  margin: 12,
};

const renderField = ({type, label, input, meta: {touched, error} }) => (
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

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      redirect: false
    }

    this.submitSignup = this.submitSignup.bind(this);
    this.submit = this.submit.bind(this);
  }


  submitSignup(firstname, lastname, email, password) {
    return fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        firstname:firstname,
        lastname: lastname,
        email:email,
        password:password}),
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
    let requiredFields = ['firstname', 'lastname', 'email', 'password']

    requiredFields.forEach(field => {
      if(!values[field]) {
        error[field] = 'Required'
      }
    })
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      error.email = 'Invalid email address'
    }
    if (isError) {
      throw new SubmissionError(error);
    } else {
      //submit form to server
      this.submitSignup(values.firstname, values.lastname, values.email, values.password)
        .then(data => console.log(data))
        .then(() => this.setState({ redirect: true }));
      // console.log(values);
    }

  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/app' />
    }

    return (
      <MuiThemeProvider>
        <form className="signup-form" onSubmit={ this.props.handleSubmit(this.submit) }>
            <Field name="firstname" label="First Name" component={renderField} type="text" />
            <Field name="lastname" label="Last Name" component={renderField} type="text" />
            <Field name="email" label="Email" component={renderField} type="text" />
            <Field name="password" label="Password" component={renderField} type="password" />
            <RaisedButton type="submit" label="Signup" primary={true} style={style} onTouchTap={(event) => this.props.handleSubmit(this.submit)} />
        </form>
      </MuiThemeProvider>
    )
  }
}


SignupForm = reduxForm({
  form: 'signupForm'
})(SignupForm)

export default SignupForm;


