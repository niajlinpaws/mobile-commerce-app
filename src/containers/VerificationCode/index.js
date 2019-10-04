import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import OtpView from "../../components/OtpView";
import VerificationCode from "../../pages/VerificationCode";
import { userverificationSuccess, resendVerificationSuccess, resetVerificationState } from "../../actions";
import { otprequired } from "../../utils/validation";

class VerificationForm extends Component {

  constructor() {
    super();
    this.renderInput = this.renderInput.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    let { message, access_token, isFailed, error } = nextProps.verification;

    if (this.props.verification.isFailed !== isFailed) {
      if (isFailed) {
        setTimeout(() => Alert.alert("", error, [{ text: "Ok" }], { cancelable: false }), 100);
      }
    }

    if (this.props.verification.message !== message) {
      if (message) {
        setTimeout(() => {
          Alert.alert("", message, [{
            text: 'OK', onPress: () => this.props.resetVerificationState()
              .then(() => this.props.navigation.navigate('ResetPassword', { access_token }))
          }], { cancelable: false });
        }, 100);
      }
    }

    if (nextProps.verification.resendMessage) {
      let message = nextProps.verification.resendMessage;
      if (message) {
        setTimeout(() => {
          Alert.alert("", message, [{ text: 'OK', onPress: () => this.props.resetVerificationState() }], { cancelable: false });
        }, 100);
      }
    }
  }

  onKeyPress({ name, key }) {
    const nextField = name.split('_'); 
    const index = nextField[1]*1;
    const field = nextField[0];

    key !== 'Backspace' && index < 4 ? this.refs[`${field}_${index+1}`].focus() : 
    key === 'Backspace' && index > 1 && this.refs[`${field}_${index-1}`].focus();
  }


  renderInput({ input, ...inputProps }) {
    const { name, onChange } = input;
    return (
      <OtpView
        {...inputProps}
        getRef={ref => this.refs[name] = ref}
        placeholder="0"
        bgColor=""
        keyboardType="numeric"
        onChangeText={onChange}
        onKeyPress={({nativeEvent:{key}})=>this.onKeyPress({name, key})}
        borderColor="#000"
      />
    );
  }

  verificationCode() {
    if (this.props.valid) {

      let email = this.props.navigation.state.params.email;
      let { otp_1, otp_2, otp_3, otp_4 } = this.props.verificationForm.values;
      let otp_code = otp_1 + otp_2 + otp_3 + otp_4;

      if (email && otp_code) {
        this.props.verificationSuccess({ email, otp_code });
      }
    } else {
      let error = Object.values(this.props.verificationForm.syncErrors)[0];
      Alert.alert('', error, [
        { text: 'OK' },
      ], { cancelable: false });

    }
  }

  render() {
    const email = this.props.navigation.state.params.email;
    const form = (
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
      }}>
        <Field
          name='otp_1'
          component={this.renderInput}
          validate={[otprequired]}
          ref="1"
        />
        <Field
          name='otp_2'
          component={this.renderInput}
          validate={[otprequired]}
          ref="2"
        />
        <Field
          name='otp_3'
          component={this.renderInput}
          validate={[otprequired]}
          ref="3"
        />
        <Field
          name='otp_4'
          component={this.renderInput}
          validate={[otprequired]}
          ref="4"
        />
      </View>
    );
    return (
      <VerificationCode
        navigation={this.props.navigation}
        verificationForm={form}
        onVerification={() => this.verificationCode()}
        loading={this.props.verification.loading}
        onResendCode={() => this.props.resendVerificationSuccess({ email })}
      />
    );
  }
}

VerificationForm.propTypes = {
  verification: PropTypes.object,
  verificationForm: PropTypes.object,
};

const VerificationContainer = reduxForm({
  form: "verification",
})(VerificationForm);

const mapStateToProps = state => ({
  verification: state.verification,
  verificationForm: state.form.verification
});

const mapDispatchToProps = dispatch => ({
  verificationSuccess: ({ email, otp_code }) => dispatch(userverificationSuccess({
    email,
    otp_code,
  })),
  resendVerificationSuccess: ({ email }) => dispatch(resendVerificationSuccess({
    email,
    type: "resend"
  })),
  resetVerificationState: () => {
    return new Promise((resolve) => {
      resolve(dispatch(resetVerificationState()));
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerificationContainer);