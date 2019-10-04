import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from 'react-native';
import { Field, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import { Form } from 'native-base';
import InputWhite from "../../components/InputWhite";
import SelectBox from "../../components/SelectBox";
import TextAreaWhite from "../../components/TextAreaWhite";
import ContactUs from "../../pages/ContactUs";
import { userContactusSuccess, resetContactUsState } from "../../actions";
import { emailFormat, emailrequired, required } from "../../utils/validation";
const subject = required('Subject');
const message = required('Message');

class ContactUsForm extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.contactus.isFailed !== nextProps.contactus.isFailed) {
      if (nextProps.contactus.isFailed) {
        let message = nextProps.contactus.error;
        setTimeout(() => {
          Alert.alert("", message,[{text:"Ok"}],{cancelable:false});
        }, 100);
      }
    }

    if (this.props.contactus.message !== nextProps.contactus.message) {
      let message = nextProps.contactus.message;
      if (message) {
        setTimeout(() => {
          Alert.alert("", message, [{
            text: 'OK', onPress: () => this.props.resetContactUsState()
              .then(() => this.props.navigation.goBack())
          }],{cancelable:false});
        }, 100);
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
        return (
          <InputWhite
            leftIcon={leftIcon}
            placeholder={placeholder}
            bgColor=""
            keyboardType={input.name === "email" ? "email-address" : "default"}
            autoCapitalize="none"
            onChangeText={input.onChange}
            inputProps={inputProps}
            inputValues={input}
          />
        );

      case "subject":
        leftIcon = require('./../../assets/img/subjectMaterial.png');
        placeholder = "Subject";
        return (
          <SelectBox
            leftIcon={leftIcon}
            selctText={placeholder}
            bgColor=""
            borderColor="#000"
            placeholder={{
              label: placeholder,
              value: null,
            }}
            items={[
              {
                label: 'Password help',
                value: 'Password_help',
              },
              {
                label: 'Product inquiry ',
                value: 'Product_inquiry ',
              },
              {
                label: 'App Issue',
                value: 'App_Issue',
              },
              {
                label: 'Other',
                value: 'Other',
              },


            ]}
            onValueChange={value => input.onChange(value)}
          />
        );

      case "message":
        leftIcon = require('./../../assets/img/chatBubbleOutlineMaterial.png');
        placeholder = "Message";
        return (
          <TextAreaWhite
            leftIcon={leftIcon}
            placeholder={placeholder}
            bgColor=""
            borderColor="#000"
            underlineColorAndroid="transparent"
            onChangeText={input.onChange}
            inputProps={inputProps}
          />
        );
    }
  }

  contactus() {
    if (this.props.valid) {
      let { email, subject, message } = this.props.contactusForm.values;
      if (email && subject && message) {
        this.props.contactusSuccess({ email, subject, message });
      }
    } else {
      let error = Object.values(this.props.contactusForm.syncErrors)[0];
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
        <Field
          name="subject"
          component={this.renderInput}
          validate={subject}
        />
        <Field
          name="message"
          component={this.renderInput}
          validate={message}
        />
      </Form>
    );
    return (
      <ContactUs
        navigation={this.props.navigation}
        contactusForm={form}
        onContactus={() => this.contactus()}
        loading={this.props.contactus.loading}
      />
    );
  }
}

ContactUsForm.propTypes = {
  contactus: PropTypes.object,
  contactusForm: PropTypes.object,
  contactUs: PropTypes.func
};

const ContactUsContainer = reduxForm({
  form: "contactUs",
})(ContactUsForm);

const mapStateToProps = state => ({
  contactus: state.contactus,
  contactusForm: state.form.contactUs
});

const mapDispatchToProps = dispatch => ({
  contactusSuccess: ({ email, subject, message }) => dispatch(userContactusSuccess({
    email,
    subject,
    message,
  })),
  resetContactUsState: () => {
    return new Promise((resolve) => {
      resolve(dispatch(resetContactUsState()));
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsContainer);