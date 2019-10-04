import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form } from 'native-base';
import Input from "../../components/Input";
import Login from "../../pages/Login";
import { userLoginSuccess } from "../../actions";
import { emailFormat, minLength8,emailrequired, passwordrequired } from "../../utils/validation";
// import Loading from "../components/Loading";

class LoginForm extends Component {
 
  componentWillReceiveProps(nextProps){
    if (this.props.auth.isFailed !== nextProps.auth.isFailed){
      if (nextProps.auth.isFailed){
        let message = nextProps.auth.error;
        setTimeout(() => {
          Alert.alert("",message,[{text:"Ok"}],{cancelable:false});
        }, 100);
      }
    }

 
    if (this.props.auth.user_data !== nextProps.auth.user_data){
      if (nextProps.auth.user_data.token){
        this.props.navigation.navigate("App");
      }
    }
  }

  renderInput({ input, ...inputProps }) {
    let leftIcon;
    let placeholder;

    switch (input.name) {
      case "email":
        leftIcon = require('./../../assets/img/mailOutlineMaterial.png');
        placeholder = "Email";
        break;

      case "password":
        leftIcon = require('./../../assets/img/lockSimpleLineIcons.png');
        placeholder = "Password";
        break;
    }

    return (
      <Input
        leftIcon={leftIcon}
        placeholder={placeholder}
        bgColor=""
        keyboardType = {input.name === "email" ? "email-address" : "default"}
        onChangeText={input.onChange}
        inputProps={inputProps}
        secureTextEntry={input.name === "password"}
        borderColor="rgba(255, 255, 255, .5)"
      />
    );
  }

  login() {
    if (this.props.valid) {
      let { email, password } = this.props.loginForm.values;
      if (email && password ){
        this.props.loginSuccess({email, password});
      } 
    } else {
      let error = Object.values(this.props.loginForm.syncErrors)[0];
      Alert.alert('',error,[
        {text: 'OK'}
      ],{cancelable:false}
      );
    
    }
  }

  render() {
    const form = (
      <Form>
        <Field
          name="email"
          component={this.renderInput}
          validate={[emailFormat, emailrequired]}
        />
        <Field
          name="password"
          component={this.renderInput}
          validate={[minLength8,passwordrequired]}
        />
      </Form>
    );
    return (
      <Login
        navigation={this.props.navigation}
        loginForm={form}
        onLogin={() => this.login()}
        loading={this.props.auth.loading}
      />
    );
  }
}

LoginForm.propTypes = {
  auth: PropTypes.object,
  loginForm: PropTypes.object,
  login: PropTypes.func
};

const LoginContainer = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = state => ({
  auth: state.auth,
  loginForm: state.form.login
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: ({ email, password }) => dispatch(userLoginSuccess({
    email,
    password,
  })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
