import React, { Component } from "react";
import PropTypes from "prop-types";
import {  Alert } from 'react-native';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Form } from 'native-base';
import InputWhite from "../../components/InputWhite";
import EditProfile from "../../pages/EditProfile";
import { userEditProfileSuccess,resetEditProfileState, setAuthData } from "../../actions";
import { emailFormat, emailrequired, minLength10, required, phonenumberrequired } from "../../utils/validation";
const username =  required('Username');


class EditProfileForm extends Component {

  componentWillReceiveProps(nextProps) {
    if (this.props.editprofile.isFailed !== nextProps.editprofile.isFailed) {
      if (nextProps.editprofile.isFailed) {
        let message = nextProps.editprofile.error;
        setTimeout(() => {
          Alert.alert("", message,[{text:"Ok"}],{cancelable:false});
        }, 100);
      }
    }

    if (this.props.editprofile.message !== nextProps.editprofile.message) {
      let user_data = nextProps.editprofile.user_data;
      let message = nextProps.editprofile.message;
      if (message) {
        setTimeout(() => {
          Alert.alert("", message,[{
            text: 'OK',onPress: () =>this.props.setAuthData(user_data)
            .then(()=>this.props.resetEditProfileState()
            .then(()=>this.props.navigation.goBack()))
          }],{cancelable:false}); 
        }, 100);
      }
    }
  }

  renderInput({ input, ...inputProps }) {
    let leftIcon;
    let placeholder;
    let keyboardType;
    switch (input.name) {
      case "name":
        leftIcon = require('./../../assets/img/userBlackSimpleLineIcons.png');
        placeholder = "Username";
        break;

      case "email":
        leftIcon = require('./../../assets/img/copy.png');
        placeholder = "Email";
        keyboardType = "email-address";
        break;

      case "phone":
        leftIcon = require('./../../assets/img/mobileBlackFontAwesome.png');
        placeholder = "Phone Number";
        keyboardType = "numeric";
        break;
    }

    return (
      <InputWhite
        leftIcon={leftIcon}
        placeholder={placeholder}
        bgColor=""
        keyboardType={keyboardType}
        // keyboardType={input.name === "phone" ? "numeric": "default"}
        onChangeText={input.onChange}
        inputValues={input}
        inputProps={inputProps}
        borderColor="#000"
      />
    );
  }

  editprofile() {
    if (this.props.valid) {
      let access_token = this.props.auth.user_data.token;
      let { name, email, phone } = this.props.editProfileForm.values;
      if (name && email && phone && access_token) {
        this.props.editProfileSuccess({ name, email, phone, access_token});
      }
    } else {
      let error = Object.values(this.props.editProfileForm.syncErrors)[0];
      Alert.alert('', error, [
        { text: 'OK' },
      ],{cancelable:false});

    }
  }

  render() {
    const form = (
      <Form>
        <Field
          name="name"
          component={this.renderInput}
          validate={[username]}
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
      </Form>
    );
    return (
      <EditProfile
        navigation={this.props.navigation}
        editProfileForm={form}
        onEditProfile={() => this.editprofile()}
        loading={this.props.editprofile.loading}
      />
    );
  }
}

EditProfileForm.propTypes = {
  editprofile: PropTypes.object,
  editProfileForm: PropTypes.object,
  editProfile: PropTypes.func
};

const EditProfileContainer = reduxForm({
  form: "editProfile",
})(EditProfileForm);

const mapStateToProps = state => ({
  auth: state.auth,
  editprofile: state.editprofile,
  editProfileForm: state.form.editProfile,
  initialValues:{
    name:state.auth.user_data.name,
    email:state.auth.user_data.email,
    phone:state.auth.user_data.phone
  }
});

const mapDispatchToProps = dispatch => ({
  editProfileSuccess: ({ name, email, phone, access_token }) => dispatch(userEditProfileSuccess({
    name,
    email,
    phone,
    access_token,
  })),
  setAuthData: (data) => {
    return new Promise((resolve)=>{
      resolve(dispatch(setAuthData(data)));
    });
  },
  resetEditProfileState: () => {
    return new Promise((resolve) => {
      resolve(dispatch(resetEditProfileState()));
    });
  }, 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);