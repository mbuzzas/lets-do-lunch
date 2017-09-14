import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import { submitSignup } from '../actions/index'
import '../css/Signup.css';

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

    this.submit = this.submit.bind(this);
  }

  submit(values) {

    console.log(values)

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
      this.props.dispatch(submitSignup(values.firstname, values.lastname, values.email, values.password))
        // .then(data => console.log(data))
        // .then(() => this.setState({ redirect: true }));
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

const mapStateToProps = (state) => ({
  user: state.user
})

SignupForm = reduxForm({
  form: 'signupForm'
})(SignupForm)

export default connect(mapStateToProps)(SignupForm);


