import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form } from 'native-base';
import Input from "../../components/Input";
import SignUp from "../../pages/SignUp";
import { userSingupSuccess, setAuthData } from "../../actions";
import { emailFormat, minLength8, alphaOnly, emailrequired, usernamerequired, phonenumberrequired, minLength10, passwordrequired } from "../../utils/validation";
import { acceptTerms } from '../../constants/messages';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = { password:'',hidePassword: true, acceptTerms: false };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.signUp.isFailed !== nextProps.signUp.isFailed) {
      if (nextProps.signUp.isFailed) {
        let message = nextProps.signUp.error;
        setTimeout(() => {
          Alert.alert("", message,[{text:"Ok"}],{cancelable:false});
        }, 100);
       
      }
    }

    if (this.props.signUp.user_data !== nextProps.signUp.user_data) {
      let user_data = nextProps.signUp.user_data;
      if (user_data) {
        setTimeout(() => {
          Alert.alert("", nextProps.signUp.message,[{text:"Ok", onPress:()=>this.props.setAuthData(user_data)
          .then(() => this.props.navigation.navigate("App"))
        }],{cancelable:false});
        }, 100);
      }
    }
  }

  toggleTermsAndConditon(){
    this.setState({ acceptTerms: !this.state.acceptTerms });
  }


  onPasswordChange(password){
    return this.setState({password});
  }

  managePasswordVisibility(){
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  renderInput({ input, ...inputProps }) {
    let leftIcon;
    let placeholder;
    let rightIcon;
    let keyboardType;

    switch (input.name) {
      case "name":
        leftIcon = require('./../../assets/img/userSimpleLineIcons.png');
        placeholder = "Username";
        break;

      case "email":
        leftIcon = require('./../../assets/img/mailOutlineMaterial.png');
        placeholder = "Email";
        keyboardType = "email-address";
        break;

      case "phone":
        leftIcon = require('./../../assets/img/mobileFontAwesome.png');
        placeholder = "Phone Number";
        keyboardType = "numeric";
        break;

      default:
      keyboardType= "default";
    }

    return (
      <Input
        leftIcon={leftIcon}
        placeholder={placeholder}
        bgColor=""
        keyboardType={keyboardType}
        autoCapitalize="none"
        onChangeText={input.onChange}
        inputProps={inputProps}
        rightIcon={rightIcon}
        borderColor="rgba(255, 255, 255, .5)"
      />
    );
  }

  viewtAndc() {
    this.props.navigation.navigate('StaticPage', {
      url: '/Terms-Conditions',
      title: 'Terms & Conditions'
    });
  }

  signup() {
    const { password } = this.state;
    if (this.props.valid && !minLength8(password) && !passwordrequired(password)) {
      let { name, email, phone } = this.props.signupForm.values;
      
      if(this.state.acceptTerms)
      {
        this.props.signupSuccess({ name, email, phone, password });
      }
      else
      {
        Alert.alert('', acceptTerms, [
          { text: 'OK' },
        ],{cancelable:false});
      }
    } else {
      let error = this.props.signupForm.syncErrors ? Object.values(this.props.signupForm.syncErrors)[0] : '';
      error = error ? error : ( minLength8(password) || passwordrequired(password));
      Alert.alert('', error, [
        { text: 'OK' }
      ],{cancelable:false});
    }
  }
  render() {
    const rightIcon = this.state.hidePassword ? require('./../../assets/img/ionEyeIonicons.png'):
          require('./../../assets/img/ionEyeDisabledIonicons.png');
    const form = (
      <Form>
        <Field
          name="name"
          component={this.renderInput}
          validate={[alphaOnly, usernamerequired]}
          type="name"
        />
        <Field
          name="email"
          component={this.renderInput}
          validate={[emailFormat, emailrequired]}
        />
        <Field
          name="phone"
          component={this.renderInput}
          validate={[phonenumberrequired, minLength10]}
        />
        <Input
          onPress={()=>this.managePasswordVisibility()}
          leftIcon={require('./../../assets/img/lockSimpleLineIcons.png')}
          placeholder="Password"
          bgColor=""
          autoCapitalize="none"
          onChangeText={(val)=>this.onPasswordChange(val)}
          secureTextEntry={this.state.hidePassword}
          rightIcon={rightIcon}
          borderColor="rgba(255, 255, 255, .5)"
        />
      </Form>
    );
    return (
      <SignUp
        navigation={this.props.navigation}
        signupForm={form}
        onSignup={() => this.signup()}
        loading={this.props.signUp.loading}
        viewtAndc={() => this.viewtAndc()}
        acceptTerms={this.state.acceptTerms}
        toggleTermsAndConditon={()=>this.toggleTermsAndConditon()}
      />
    );
  }
}

SignupForm.propTypes = {
  signUp: PropTypes.object,
  signupForm: PropTypes.object,
  signup: PropTypes.func
};

const SignupContainer = reduxForm({
  form: "signup",
})(SignupForm);

const mapStateToProps = state => ({
  signUp: state.signUp,
  signupForm: state.form.signup
});

const mapDispatchToProps = dispatch => ({
  signupSuccess: ({ name, email, phone, password }) => dispatch(userSingupSuccess({
    name,
    email,
    phone,
    password,
  })),
  setAuthData: (data) => {
    return new Promise((resolve) => {
      resolve(dispatch(setAuthData(data)));
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupContainer);
