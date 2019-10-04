import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert } from 'react-native';
import { connect } from "react-redux";
import StaticPage from "../../pages/StaticPage";
import { staticPageSuccess } from "../../actions";

class StaticPageContainer extends Component {

    componentDidMount(){
        this.props.staticPageSuccess(this.props.navigation.state.params.url);
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.staticpage.isFailed !== nextProps.staticpage.isFailed) {
            if (nextProps.staticpage.isFailed) {
                let message = nextProps.staticpage.error;
                setTimeout(() => {
                    Alert.alert("", message,[{text:"Ok"}],{cancelable:false});
                }, 100);
            }
        }

        if (this.props.staticpage.message !== nextProps.staticpage.message) {
            let message = nextProps.staticpage.message;
            if (message) {
                setTimeout(() => {
                    Alert.alert("", message, [{ text: 'OK', onPress: () => this.props.navigation.navigate('Login') }],{cancelable:false});
                }, 100);
            }
        }
    }

    getTitle(){
        const data = this.props.staticpage.data;
        return data ? data.title : this.props.navigation.state.params.title;
    }

    getDescription(){
        const data = this.props.staticpage.data;  
        return data ? data.description : '' ;
    }


    render() {
        return (
            <StaticPage 
                title={this.getTitle()}
                navigation={this.props.navigation}
                description={this.getDescription()}
            />
        );
    }
}

StaticPageContainer.propTypes = {
    staticpage: PropTypes.object,
};


const mapStateToProps = state => ({
    staticpage: state.staticpage,
});

const mapDispatchToProps = dispatch => ({
    staticPageSuccess: (url) => dispatch(staticPageSuccess({
        url,
    })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StaticPageContainer);