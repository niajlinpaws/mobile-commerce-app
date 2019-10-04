import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../components/Loading";

class LoadingContainer extends Component {
  componentDidMount(){
    this.props.navigation.navigate(this.props.auth.user_data ? "App" : "Auth");
  }
  render() {
    return (
      <Loading />
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null
)(LoadingContainer);