import React, { Component } from 'react';
import {Button, Form, Message, Grid, Header, Image, Segment} from "semantic-ui-react";
import "./forgot-password.css";
import { Formik } from "formik";
import * as Yup from 'yup'
import { withRouter } from "react-router-dom";
import forgotPasswordService from './forgot-password-service'
import logo from '../../../src/assets/images/logo.png'; // Tell Webpack this JS file uses this image


const initialValues = {
  username: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email("Username must be a valid email address.")
    .required("Username is required.")
});

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessages:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleSubmit = async (values, {props=this.props, resetForm, setErrors, setSubmitting }) => {
     
    this.setState({
      validationMessages: []
    });
    var response = await forgotPasswordService.resetPassword(values.username);
    setSubmitting(false);

    if (response.status === 200) {
      this.props.history.push("/login");
      return;
    }

    if (response.status === 422) {
      let validationMessages = [];

      response.data.forEach((item, index) => {
        if (item.fieldName) {
          setErrors({[item.fieldName]: item.message});
        } else {
          validationMessages.push(item.message);
        }
      });

      this.setState({
        validationMessages: validationMessages
      });
    }
  };

  handleInputChange(e, handleChange){
    this.setState({
      validationMessages: []
    });
    handleChange(e);
  }

  render() {
     
    return(
      <Formik
        initialValues={initialValues} 
        onSubmit={this.handleSubmit}
        validationSchema = {validationSchema}
        render={props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
          } = props;

          return(
            <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 450 }}>
                  <Header as="h2" color="blue" textAlign="center">
                      <Image src={logo} className='header-logo'/>
                  </Header>
                  <Header size="medium" color="blue">
                      Request to reset your password
                  </Header>
                  <Form size="large" onSubmit={handleSubmit}>
                      <Segment stacked>
                          <Form.Field>
                              <label>Username *</label>
                              <input type="email" name="username" placeholder="username" value={values.username} onChange={(e)=>this.handleInputChange(e, handleChange)} />
                              {touched.username && errors.username ? (
                              <Message negative size="small" className='validationMessage'>
                                  <p>{errors.username}</p>
                              </Message>
                              ) : null}
                          </Form.Field>
                          <Button color="blue" fluid size="large" disabled={isSubmitting}>Reset Password</Button>
                          {this.state.validationMessages  && this.state.validationMessages.length ? (
                          <Message negative size="small" list={this.state.validationMessages}>
                           </Message>
                          ) : null} 
                          <Segment.Group horizontal className="forget-password-container">
                              <Segment textAlign="left">
                                  <a href="/login">Back To Login Page</a>
                              </Segment>
                          </Segment.Group>
                      </Segment>
                  </Form>
              </Grid.Column>
            </Grid>
           );
        }}
     />
     );
   }
}

export default withRouter(ForgotPassword);
