import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import '../css/Login.css';

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

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    }

    this.submitLogin = this.submitLogin.bind(this);
    this.submit = this.submit.bind(this);
  }

  // submitLogin(email, password) {
  //   return fetch('/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({email:email, password:password}),
  //   })
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     // return responseJson;
  //     //dispatch action type property
  //     console.log(responseJson);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });  
  // }

  submit(values) {

    let error = {};
    let isError = false;

    if (!values.email) {
      error.email = 'Required';
      isError = true;
    }

    if (!values.password) {
      error.password = 'Required';
      isError = true;
    }

    if (isError) {
      throw new SubmissionError(error);
    } else {
      this.submitLogin(values.email, values.password)
        .then(data => console.log(data))
        .then(() => this.setState({ redirect: true}));
    }
    
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/app' />
    }

    return (
      <MuiThemeProvider>
        <form className="login-form" onSubmit={ this.props.handleSubmit(this.submit) }>
            <Field name="email" label="Email" component={renderField} type="text" />
            <Field name="password" label="Password" component={renderField} type="password" />
            <RaisedButton type="submit" label="Login" primary={true} style={style} onTouchTap={(event) => this.props.handleSubmit(this.submit)} />
        </form>
      </MuiThemeProvider>
    )
  }
}


LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm)

export default LoginForm;
