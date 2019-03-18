import React, { Component } from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import formValidate from '../../shared/services/form-validate';
import loginService from './loginService'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormValid: false,
      loginForm: {
        username: {
          value: '',
          validationRules:
          {
            required: {
              message: 'Username is required.'
            },
            minLength: {
              value: 3,
              message: 'Username cannot be less than 3 characters.'
            }
          },
          placeholder: 'Please enter username.',
          touched: false,
          valid: true,
          errorMessage: ''
        },
        password: {
          value: '',
          validationRules:
          {
            required: {
              message: 'Password is required.'
            },
            minLength: {
              value: 3,
              message: 'Password cannot be less than 3 characters.'
            }
          },
          placeholder: 'Password',
          touched: false,
          valid: true,
          errorMessage: ''
        }
      }
    };
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    const formElement = {
      ...this.state.loginForm[name]
    };

    formElement.value = value;

    this.validateElement(name, formElement);
  }

  validateElement(name, formElement) {
    const formControls = {
      ...this.state.loginForm
    };
    const invalidRule = formValidate(formElement.value, formElement.validationRules);

    formElement.touched = true;
    formElement.valid = invalidRule == null;
    formElement.errorMessage = formElement.valid ? '' : invalidRule.message;
    formControls[name] = formElement;

    this.setState({
      loginForm: formControls
    }, function () {
      this.isFormValid();
    });
  }

  login = event => {
    this.validateForm();

    if (!this.state.isFormValid) {
      return;
    }

    const loginForm = this.state.loginForm;

    loginService.login({ username: loginForm.username.value, password: loginForm.password.value });
  }

  validateForm() {
    const loginForm = this.state.loginForm;

    Object.keys(loginForm).forEach((name, index) => {
      this.validateElement(name, loginForm[name]);
    });
  }

  isFormValid() {
    const loginForm = this.state.loginForm;
    const isFormValid = Object.keys(loginForm).filter(item => !loginForm[item].valid).length == 0;

    this.setState({ isFormValid: isFormValid });
  }

  render() {
    const loginForm = this.state.loginForm;
    return (
      <Form>
        <Form.Field>
          <label>Username*</label>
          <input name='username' placeholder={loginForm.username.placeholder}
            value={loginForm.username.value} onChange={this.changeHandler} />
          <Message negative size='small' hidden={!(!loginForm.username.valid && loginForm.username.touched)} >
            <p>{loginForm.username.errorMessage}</p>
          </Message>
        </Form.Field>
        <Form.Field>
          <label>Password*</label>
          <input name="password" type="password" placeholder={loginForm.password.placeholder}
            value={loginForm.password.value} onChange={this.changeHandler} />
          <Message negative size='small' hidden={!(!loginForm.password.valid && loginForm.password.touched)} >
            <p>{loginForm.password.errorMessage}</p>
          </Message>
        </Form.Field>
        <Form.Field>
          <a>Forgot password </a>
          <a>Register</a>
        </Form.Field>
        <Button type='submit' onClick={this.login} disabled={!this.state.isFormValid}>Login</Button>
      </Form>
    );
  }
}

export default Login;
