import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Setting from "../../pages/Setting";
import { userRequestLogout } from "../../actions";

class SettingContainer extends Component {

  componentWillMount(){

    console.log("setting component will mount method called========>");
  }

      componentWillReceiveProps(nextProps){
        console.log("inside componentWillReceiveProps Setting===========>",);
        // if (this.props.auth.token !== nextProps.auth.token){
        //   if (nextProps.auth.token){
        //     this.props.navigation.navigate("App");
        //   }
        // }
      }

  logout() {
    this.props.logoutRequest();
    this.props.navigation.navigate('Auth');
  }
  viewtAndc(){
    this.props.navigation.navigate('StaticPage',{
      url:'/Terms-Conditions',
      title: 'Terms & Conditions'
    });
  }
  viewhAndp(){
    this.props.navigation.navigate('StaticPage',{
      url:'/Help-Support',
      title: 'Help & Support'
    });
  }
  viewpAndp(){
    this.props.navigation.navigate('StaticPage',{
      url:'/Privacy-Policy',
      title: 'Privacy & Policy'
    });
  }

  render() {
    return (
      <Setting
        navigation={this.props.navigation}
        onLogout={ ()=> this.logout() }
        viewtAndc={() => this.viewtAndc()}
        viewhAndp={() => this.viewhAndp()}
        viewpAndp={() => this.viewpAndp()}
      />
    );
  }
}

SettingContainer.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logoutRequest: () => dispatch(userRequestLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingContainer);
