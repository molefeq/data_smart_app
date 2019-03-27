import React, { Component } from "react";
import {
  Button,
  Form,
  Message,
  Grid,
  Header,
  Image,
  Dropdown
} from "semantic-ui-react";
import registerService from "./registerService";
import { Formik } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import logo from "../../../src/assets/images/logo.png";
import "./register.css";

const initialValues = {
  emailAddress: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  countryId: ""
};

const validationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Username must be a valid email address.")
    .required("Username is required."),
  firstName: Yup.string().required("FirstName is required."),
  lastName: Yup.string().required("LastName is required."),
  password: Yup.string()
    .min(8, "Password cannot be shorted than 8 characters.")
    .required("Password is required."),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Confirm Password must match Password.')
    .min(8, "Confirm Password cannot be shorted than 8 characters.")
    .required("Confirm Password is required."),
  countryId: Yup.string().required("Country is required.")
});

const countryOptions = [
  { value: "1", text: "Afghanistan" },
  { value: "1", text: "Aland Islands" },
  { value: "1", text: "Albania" },
  { value: "1", text: "Algeria" },
  { value: "1", text: "American Samoa" },
  { value: "1", text: "Andorra" },
  { value: "1", text: "Angola" },
  { value: "1", text: "Anguilla" },
  { value: "1", text: "Antigua" },
  { value: "1", text: "Argentina" },
  { value: "1", text: "Armenia" },
  { value: "1", text: "Aruba" },
  { value: "1", text: "Australia" },
  { value: "1", text: "Austria" },
  { value: "1", text: "Azerbaijan" },
  { value: "1", text: "Bahamas" },
  { value: "1", text: "Bahrain" },
  { value: "1", text: "Bangladesh" },
  { value: "1", text: "Barbados" },
  { value: "1", text: "Belarus" },
  { value: "1", text: "Belgium" },
  { value: "1", text: "Belize" },
  { value: "1", text: "Benin" },
  { value: "1", text: "Bermuda" },
  { value: "1", text: "Bhutan" },
  { value: "1", text: "Bolivia" },
  { value: "1", text: "Bosnia" },
  { value: "1", text: "Botswana" },
  { value: "1", text: "Bouvet Island" },
  { value: "1", text: "Brazil" },
  { value: "1", text: "British Virgin Islands" },
  { value: "1", text: "Brunei" },
  { value: "1", text: "Bulgaria" },
  { value: "1", text: "Burkina Faso" },
  { value: "1", text: "Burundi" },
  { value: "1", text: "Caicos Islands" },
  { value: "1", text: "Cambodia" },
  { value: "1", text: "Cameroon" },
  { value: "1", text: "Canada" } 
];

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationMessages: [],
      countries: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  componentDidMount = async() => {
    const countries = await registerService.countries();
    this.setState({
      countries: countries
    });
  }

  handleSubmit = async (values, { props = this.props, resetForm, setErrors, setSubmitting }) => {
    this.setState({
      validationMessages: []
    });
    var response = await registerService.register(values);
    setSubmitting(false);

    if (response.status === 200) {
      this.props.history.push("/login");
      return;
    }

    if (response.status === 422) {
      let validationMessages = [];

      response.data.forEach((item, index) => {
        if (item.fieldName) {
          setErrors({ [item.fieldName]: item.message });
        } else {
          validationMessages.push(item.message);
        }
      });

      this.setState({
        validationMessages: validationMessages
      });
    }
  };

  handleInputChange(e, handleChange) {
    this.setState({
      validationMessages: []
    });
    handleChange(e);
  }

  handleDropdownChange = (e, { value }, setFieldValue, name) => {
    this.setState({
      validationMessages: []
    });
    setFieldValue(name, value, true);
  }

  cancel() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
        render={props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleSubmit,
            setFieldValue
          } = props;

          return (    
          <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="blue" textAlign="center">
                    <Image src={logo} className="header-logo" />
                </Header>
                <Header size="medium" color="blue">
                    Register new account
                </Header>
                {this.state.validationMessages && this.state.validationMessages.length ? (
                    <Message negative size="small" list={this.state.validationMessages} />
                ) : null}
                <Form size="large" onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Email Address *</label>
                        <input name="emailAddress" placeholder="Enter Email Address" value={values.emailAddress} onChange={e => this.handleInputChange(e, handleChange)} type="email"/>
                        {touched.emailAddress && errors.emailAddress ? (
                        <Message negative size="small" className="validationMessage">
                            <p>{errors.emailAddress}</p>
                        </Message>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>FirstName *</label>
                        <input name="firstName" placeholder="Enter FirstName" value={values.firstName} onChange={e => this.handleInputChange(e, handleChange)}/>
                        {touched.firstName && errors.firstName ? (
                        <Message negative size="small" className="validationMessage">
                            <p>{errors.firstName}</p>
                        </Message>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>LastName *</label>
                        <input name="lastName" placeholder="Enter LastName" value={values.lastName} onChange={e => this.handleInputChange(e, handleChange)}/>
                        {touched.lastName && errors.lastName ? (
                        <Message negative size="small" className="validationMessage">
                            <p>{errors.lastName}</p>
                        </Message>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Password *</label>
                        <input name="password" type="password" placeholder="Enter Password" value={values.password} onChange={e => this.handleInputChange(e, handleChange)}
                        />
                        {touched.password && errors.password ? (
                        <Message negative size="small" className="validationMessage">
                            <p>{errors.password}</p>
                        </Message>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password*</label>
                        <input name="confirmPassword" type="password" placeholder="Enter Confirm Password" value={values.confirmPassword} onChange={e => this.handleInputChange(e, handleChange)}/>
                        {touched.confirmPassword && errors.confirmPassword ? (
                        <Message negative size="small" className="validationMessage">
                            <p>{errors.confirmPassword}</p>
                        </Message>
                        ) : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Country *</label>
                        <Dropdown placeholder="Select Country" name="countryId" fluid selection search value={values.countryId} onChange={(e, { value })=> this.handleDropdownChange(e, { value }, setFieldValue,  'countryId')} options={this.state.countries} />
                            {touched.countryId && errors.countryId ? (
                            <Message negative size="small" className="validationMessage">
                                <p>{errors.countryId}</p>
                            </Message>
                            ) : null}
                    </Form.Field>
                    <Button type="submit" disabled={isSubmitting}>
                        Register
                    </Button>
                    <Button type="button" onClick={this.cancel} disabled={isSubmitting}>
                        Cancel
                    </Button>
                </Form>
            </Grid.Column>
          </Grid>
          );
        }}
      />
    );
  }
}

export default withRouter(Register);
