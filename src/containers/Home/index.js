import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert, FlatList } from 'react-native';
import { connect } from "react-redux";
import PostCard from "../../components/PostCard";
import HomePage from "../../pages/Home";
import { userHomeSuccess, toggleLikeStatus,homeSearch, pullToRefresh } from "../../actions";
import Share from 'react-native-share';


class Home extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      toggleSearchBox: false,
      searching:false,
      searchData:[]
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    const { token, feed_type} = this.props.auth.user_data;
    this.props.userHomeSuccess(token, feed_type, this.props.home.nextPage);
  }
  openShare() {
    const options = {
      message: "Please share this app !!!!"
    };
    Share.open(options)
      .then((res) => {})
      .catch((err) => { err && console.log(err); });
  }

  toggleSearchBox(){
    return this.setState({ 
      toggleSearchBox: !this.state.toggleSearchBox,
      searchData: !this.state.toggleSearchBox && !this.state.searching ? this.props.home.data : this.state.searchData,
      searching: this.state.toggleSearchBox ? false : this.state.searching 
    });
  }

  homeSearch(title){
    this.setState({
      searchData: this.props.home.data.filter((item) => RegExp(title,"i").test(item.title)),
      searching:true
    });
  }

  _handleRefresh = () => {
    !this.state.toggleSearchBox && this.props.pullToRefresh() && this.fetchData(1);
  }

  renderItem(item) {
    return (
      <PostCard
        navigation={this.props.navigation}
        item={item}
        toggleLikeStatus={() => this.props.toggleLikeStatus(
          this.props.auth.user_data.token,
          item.id,
          Number(!item.is_liked)
        )}
        openShare={this.openShare}
      />
    );
  }


  render() {
    const { data, nextPage } = this.props.home;
    const list = (
      <FlatList
      refreshing = { this.props.home.pullToRefresh }
      onRefresh={this._handleRefresh}
      data={this.state.toggleSearchBox ? this.state.searchData : data}
      renderItem={({ item }) => this.renderItem(item)}
        onEndReachedThreshold={0.7}
        onEndReached={({distanceFromEnd})=>{
          if (distanceFromEnd > 0) {
            //call API to get next page values
            !this.state.toggleSearchBox && this.fetchData();
          }
        }}
      />
    );
    return (
      <HomePage
        shouldToggleSearchBox={this.state.toggleSearchBox}
        toggleSearchBox={()=> this.toggleSearchBox()}
        showSearchResults={(title)=>this.homeSearch(title)}
        list={list}
        loading={this.props.home.loading}
      />
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object,
  home: PropTypes.object,
};



const mapStateToProps = state => ({
  auth: state.auth,
  home: state.home
});

const mapDispatchToProps = dispatch => ({
  userHomeSuccess: (access_token, feed_type, page ) => dispatch(userHomeSuccess({
    access_token,
    feed_type,
    page
  })),
  toggleLikeStatus: (access_token, product_id, status) => dispatch(toggleLikeStatus({
    access_token,
    product_id,
    status
  })),
  homeSearch:(title) => dispatch(homeSearch({ title })),
  pullToRefresh : () => dispatch(pullToRefresh()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
