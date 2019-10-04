import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form } from 'native-base';
import InputWhite from "../../components/InputWhite";
import ForgotPassword from "../../pages/ForgotPassword";
import { userforgotpassSuccess,resetForgotPasswordState } from "../../actions";
import { emailFormat, emailrequired, } from "../../utils/validation";

class ForgotPasswordForm extends Component {
  componentWillReceiveProps(nextProps) {

    if (this.props.forgotpassword.isFailed !== nextProps.forgotpassword.isFailed) {
      if (nextProps.forgotpassword.isFailed) {
        let message = nextProps.forgotpassword.error;
        setTimeout(() => {
          Alert.alert("", message,[{text:"Ok"}],{cancelable:false});
        }, 100);
      }
    }

    if (this.props.forgotpassword.message !== nextProps.forgotpassword.message) {
      let message = nextProps.forgotpassword.message;
      if (message) {
      setTimeout(() => {
        Alert.alert("", message,[{
          text: 'OK', onPress: () => this.props.resetForgotPasswordState()
              .then(()=>this.props.navigation.navigate('VerificationCode',
            { email: this.props.forgotPasswordForm.values.email,
            }))
          }],{cancelable:false});
        },100);   
      }   
    }
  }

  renderInput({ input, ...inputProps }) {
    let leftIcon;
    let placeholder;

    switch (input.name) {
      case "email":
        leftIcon = require('./../../assets/img/copy.png');
        placeholder = "Email";
        break;
    }

    return (
      <InputWhite
        leftIcon={leftIcon}
        placeholder={placeholder}
        bgColor=""
        keyboardType="email-address"
        onChangeText={input.onChange}
        inputProps={inputProps}
        inputValues={input}
        borderColor="#000"
      />
    );
  }

  forgot() {
    if (this.props.valid) {
      
      let { email } = this.props.forgotPasswordForm.values;
      if (email) {
        this.props.forgotPasswordSuccess({ email });

      }
    } else {
      let error = Object.values(this.props.forgotPasswordForm.syncErrors)[0];
      Alert.alert('', error, [
        { text: 'OK' },
      ],{cancelable:false});

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
      </Form>
    );
    return (
      <ForgotPassword
        navigation={this.props.navigation}
        forgotPasswordForm={form}
        onForgot={() => this.forgot()}
        loading={this.props.forgotpassword.loading}
      />
    );
  }
}

ForgotPasswordForm.propTypes = {
  forgotpassword: PropTypes.object,
  forgotPasswordForm: PropTypes.object,
  forgotPassword: PropTypes.func
};

const ForgotPasswordContainer = reduxForm({
  form: "forgotPassword",
})(ForgotPasswordForm);

const mapStateToProps = state => ({
  forgotpassword: state.forgotpassword,
  forgotPasswordForm: state.form.forgotPassword,

});

const mapDispatchToProps = dispatch => ({
  forgotPasswordSuccess: ({ email }) => dispatch(userforgotpassSuccess({
    email,
  })),

  resetForgotPasswordState: () => {
    return new Promise((resolve) => {
      resolve(dispatch(resetForgotPasswordState()));
    });
  }, 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer);