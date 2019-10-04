import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert, FlatList, StyleSheet, } from 'react-native';
import { connect } from "react-redux";
// import CommentBox from "../components/CommentBox";
import CommentsPage from "../../pages/Comment";
import { commentListSuccess } from "../../actions";
import CommentBox from "../../components/CommentBox";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        console.log("inside Comments componentDidMount  method=========>");

        this.fetchData();
    }


    componentWillReceiveProps(nextProps) {
        console.log("inside Comments componentWillReceiveProps  method=========>");
    }


    fetchData(page) {

        const { token } = this.props.auth.user_data;
        //2044
        //this.props.navigation.state.params.product_id
        //this.props.comment.nextPage
        this.props.commentListSuccess(token, 2044, 0);
    }

    ListEmptyView = () => {
        return (
            <View style={styles.replyMainArea}>
            <Text style={{textAlign: 'center'}}> Sorry, No Data Present In FlatList... Try Again.</Text>
        </View> 
        );
      }

    renderItemChildren(item) {

        return (
            <View style={styles.replyArea}>
                <CommentBox
                    // avatorIcon={require("./../assets/img/noUserImage.png")}
                    heading={item.child_comment_author}
                    discription={item.child_comment_content}
                    postTime={item.child_comment_date}
                />
            </View>
        );
    }

    renderItem(item) {

        const listchildren = (children) => (
            <FlatList
                data={children} 
                renderItem={({ item }) => this.renderItemChildren(item)}
            />
        );

        return (
            <View style={styles.replyMainArea}>
                <CommentBox
                    // avatorIcon={require("./../assets/img/noUserImage.png")}
                    heading={item.comment_author}
                    discription={item.comment_content}
                    postTime={item.comment_date}
                    iconImageLeft={require("./../../assets/img/ionForwardIonicons.png")}
                    ButtonText="Reply"
                    bWidth={0.5}
                />
                {listchildren(item.children)}
            </View>
        );
    }

    render() {

        const { data, nextPage } = this.props.comment;
        const list = (
            <FlatList
                //ListEmptyComponent={this.ListEmptyView}
                data={data}
                renderItem={({ item }) => this.renderItem(item)}
            />
        );

        return (
            <CommentsPage
                list={list}
                navigation={this.props.navigation}
                loading={this.props.comment.loading}
            />
        );
    }
}


const styles = StyleSheet.create({
    replyMainArea: {},
    replyArea: {
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.2)"
    }
});

Comments.propTypes = {
    auth: PropTypes.object,
    comment: PropTypes.object,
};



const mapStateToProps = state => ({
    auth: state.auth,
    comment: state.comment
});

const mapDispatchToProps = dispatch => ({
    commentListSuccess: (access_token, product_id, page) => dispatch(commentListSuccess({
        access_token,
        product_id,
        page
    }))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments);
