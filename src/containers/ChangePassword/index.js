import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form } from 'native-base';
import InputWhite from "../../components/InputWhite";
import ChangePassword from "../../pages/ChangePassword";
import { userChangePasswordSuccess, resetChangePasswordState } from "../../actions";
import {passwordDontMatch} from "../../constants/messages";
import { oldpasswordrequired, newpasswordrequired, confirmpasswordrequired, minLength8 } from "../../utils/validation";

class ChangePasswordForm extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.changepassword.isFailed !== nextProps.changepassword.isFailed) {
      if (nextProps.changepassword.isFailed) {
        let message = nextProps.changepassword.error;
        setTimeout(() => {
          Alert.alert("", message,[{text:"Ok"}],{cancelable:false});
        }, 100);
      }
    }
  
    if (this.props.changepassword.message !== nextProps.changepassword.message) {
      let message = nextProps.changepassword.message;
      if (message) {
        setTimeout(() => {
          Alert.alert("", message,[{ text: 'OK', onPress: () =>this.props.resetChangePasswordState()
          .then(()=>this.props.navigation.goBack())}],{cancelable:false});
        }, 100);
      }
    }
  }
  
  renderInput({ input, ...inputProps }) {
    let leftIcon;
    let placeholder;
    switch (input.name) {
      case "current_password":
        leftIcon = require('./../../assets/img/lockBlackIcon.png');
        placeholder = "Old Password";
        break;

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
        inputProps={inputProps}
        inputValues={input}
        borderColor="#000"
        secureTextEntry={input.name === "current_password" || input.name === "new_password" || input.name === "confirmPassword"}
      />
    );
  }

  changepassword() {
    if (this.props.valid) {
      let access_token = this.props.auth.user_data.token;
      let { current_password, new_password, confirmPassword } = this.props.changePasswordForm.values;
      if (current_password && new_password && confirmPassword && access_token && (new_password === confirmPassword)) {
        this.props.changetPasswordSuccess({ current_password, new_password, access_token });
      }
      else{
        Alert.alert('', passwordDontMatch,[{text:"Ok"}],{cancelable:false});
      }
    } else {
      let error = Object.values(this.props.changePasswordForm.syncErrors)[0];
      Alert.alert('', error,[{text:"Ok"}],{cancelable:false});

    }
  }

  render() {
    const form = (
      <Form>
        <Field
          name="current_password"
          component={this.renderInput}
          validate={[oldpasswordrequired]}
        />
        <Field
          name="new_password"
          component={this.renderInput}
          validate={[newpasswordrequired, minLength8]}
        />
        <Field
          name="confirmPassword"
          component={this.renderInput}
          validate={[confirmpasswordrequired, minLength8]}
        />
      </Form>
    );
    return (
      <ChangePassword
        navigation={this.props.navigation}
        changePasswordForm={form}
        onChangePassword={() => this.changepassword()}
        loading={this.props.changepassword.loading}
      />
    );
  }
}

ChangePasswordForm.propTypes = {
  changepassword: PropTypes.object,
  changePasswordForm: PropTypes.object,
  changePassword: PropTypes.func
};

const ChangePasswordContainer = reduxForm({
  form: "changePassword",
})(ChangePasswordForm);

const mapStateToProps = state => ({
  auth: state.auth,
  changepassword: state.changepassword,
  changePasswordForm: state.form.changePassword
});

const mapDispatchToProps = dispatch => ({
  changetPasswordSuccess: ({ current_password, new_password, access_token }) => dispatch(userChangePasswordSuccess({
    current_password,
    new_password,
    access_token,
  })),
  resetChangePasswordState: () => {
    return new Promise((resolve) => {
      resolve(dispatch(resetChangePasswordState()));
    });
  }, 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordContainer);