import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DetailPage from "../../pages/Detail";
import { productDetailSuccess, productToggleLikeStatus, toggleLikeStatus } from "../../actions";
import Share from 'react-native-share';

class ProductDetail extends Component {

  componentDidMount() {
    this.props.productDetailSuccess(this.props.auth.user_data.token, this.props.navigation.state.params.product_id);
  }
  openShare() {
    const options = {
      message: "Please share this app !!!!"
    };
    Share.open(options)
      .then((res) => { })
      .catch((err) => { err && console.log(err); });
  }

  toggleLike({type, ...data}){
    type ?  this.props.toggleLikeStatus(data) :
    this.props.productToggleLikeStatus(data);
  }

  navigateWebView(){
    const item = this.props.productdetail.data;
    const url = item.product_url;
    this.props.navigation.navigate('WebView',{url})
  }

  render() {
    const item = this.props.productdetail.data;
    const home = item && this.props.home.data.filter(product=>product.id == item.product_id)[0] || {};
    const type = Object.keys(home).length;
    return (
      <DetailPage
        navigation={this.props.navigation}
        home={ type ? home : item}
        item={item}
        toggleLikeStatus={() => this.toggleLike({
          access_token: this.props.auth.user_data.token,
          product_id: type ? home.id : item.product_id,
          status: Number(type ? !home.is_liked : !item.is_liked),
          type
        })}
        openShare={() => this.openShare()}
        loading={this.props.productdetail.loading}
        inAppBrowser={() => this.navigateWebView()}
      />
    );
  }
}

ProductDetail.propTypes = {
  auth: PropTypes.object,
  productdetail: PropTypes.object,
  home: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  productdetail: state.productdetail,
  home: state.home
});

const mapDispatchToProps = dispatch => ({
  productDetailSuccess: (access_token, product_id) => dispatch(productDetailSuccess({
    access_token,
    product_id
  })),
  productToggleLikeStatus: ({access_token, product_id, status}) => dispatch(productToggleLikeStatus({
    access_token,
    product_id,
    status
  })),
  toggleLikeStatus: ({access_token, product_id, status}) => dispatch(toggleLikeStatus({
    access_token,
    product_id,
    status
  }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
