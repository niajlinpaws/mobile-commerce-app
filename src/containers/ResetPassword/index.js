import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { NavigationActions } from 'react-navigation'
import { connect } from "react-redux";
import { Form } from 'native-base';
import InputWhite from "../../components/InputWhite";
import ResetPassword from "../../pages/ResetPassword";
import { userResetpasswordSuccess,resetResetPasswordState } from "../../actions";
import {minLength8,required } from "../../utils/validation";
import {passwordDontMatch} from "../../constants/messages";
const newpassword =  required('New Password');
const confirmpassword =  required('Confirm Password');

class ResetPasswordForm extends Component {
  
  componentWillReceiveProps(nextProps){
    if (this.props.resetpassword.isFailed !== nextProps.resetpassword.isFailed){
      if (nextProps.resetpassword.isFailed){
        let message = nextProps.resetpassword.error;
        setTimeout(() => {
          Alert.alert("",message,[{text:"Ok"}],{cancelable:false});
        }, 100);
      }
    }
    if (this.props.resetpassword.message !== nextProps.resetpassword.message){
     let message = nextProps.resetpassword.message;
      if (message){
        setTimeout(() => { 
          Alert.alert("",message,[{text: 'OK',onPress: () => this.props.resetResetPasswordState()
          .then(()=>this.props.navigation.popToTop())}],{cancelable:false});
        }, 100); 
      }
    }
  }

  renderInput({ input, ...inputProps }) {
    let leftIcon;
    let placeholder;
    switch (input.name) {
        case "new_password":
        leftIcon = require('./../../assets/img/lockBlackIcon.png');
        placeholder = "New Password";
        break;

        case "confirmPassword":
        leftIcon = require('./../../assets/img/lockBlackIcon.png');
        placeholder = "Confirm Password";
        break;
    }

    return (
      <InputWhite
        leftIcon={leftIcon}
        placeholder={placeholder}
        bgColor=""
        onChangeText={input.onChange}
        secureTextEntry={input.name === "new_password" || input.name === "confirmPassword" }
        inputProps={inputProps}
        inputValues={input}
        borderColor="#000"
      />
    );
  }

  resetpassword() {
    if (this.props.valid) {
      let access_token  = this.props.navigation.state.params.access_token;
      
      let {new_password, confirmPassword } = this.props.resetPasswordForm.values;
      if (new_password === confirmPassword && access_token){
        this.props.resetPasswordSuccess({new_password, access_token });
      }
      else {
        Alert.alert('',passwordDontMatch,[{text:"Ok"}],{cancelable:false});
      }
    } else {
      let error = Object.values(this.props.resetPasswordForm.syncErrors)[0];
      Alert.alert('',error,[{text:"Ok"}],{cancelable:false});
    
    } 
  }

  render() {
    const form = (
      <Form>
        <Field
          name="new_password"
          component={this.renderInput}
          validate={[minLength8,newpassword]}
        />
        <Field
          name="confirmPassword"
          component={this.renderInput}
          validate={[confirmpassword]}
        />
      </Form>
    );
    return (
      <ResetPassword
        navigation={this.props.navigation}
        resetPasswordForm={form}
        onResetPassword={() => this.resetpassword()}
        loading={this.props.resetpassword.loading}
      />
    );
  }
}

ResetPasswordForm.propTypes = {
  resetpassword: PropTypes.object,
  resetPasswordForm: PropTypes.object,
  resetPassword: PropTypes.func
};

const ResetPasswordContainer = reduxForm({
    form: "resetPassword",
})(ResetPasswordForm);

const mapStateToProps = state => ({
    resetpassword: state.resetpassword,
    resetPasswordForm: state.form.resetPassword
});

const mapDispatchToProps = dispatch => ({
    resetPasswordSuccess: ({ new_password,access_token  }) => dispatch(userResetpasswordSuccess({
      new_password, 
      access_token,
    
  })),
  resetResetPasswordState: () => {
    return new Promise((resolve) => {
      resolve(dispatch(resetResetPasswordState()));
    });
  }, 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordContainer);