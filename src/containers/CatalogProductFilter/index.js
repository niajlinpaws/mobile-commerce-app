import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from 'react-native';
import { connect } from "react-redux";
import FilterPage from '../../pages/Filter';
import { catalogProductSuccess, catalogProductFilterSuccess, clearFilterState } from "../../actions";

class CatalogProductFilter extends Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.props.catalogProductFilterSuccess(this.props.auth.user_data.token);
    }

    clearFilters(){
        console.log("inside clearFilters==========>");
        Promise.resolve()
        .then(()=>this.props.clearFilterState())
        .then(()=>this.props.navigation.goBack())
        // .then(()=>this.props.catalogProductSuccess())

    }

    render() {
        const { productFilters, loading } = this.props.catalog;
        return (
            <FilterPage
                clearFilters={()=>this.clearFilters()}
                navigation={this.props.navigation}
                catalogProductFilters={productFilters}
                loading={loading}
            />
        );
    }
}

CatalogProductFilter.propTypes = {
    auth: PropTypes.object,
    catalog: PropTypes.object,
};

const mapStateToProps = state => ({
    auth: state.auth,
    catalog: state.catalog
});

const mapDispatchToProps = dispatch => ({
    catalogProductFilterSuccess: (access_token) => dispatch(catalogProductFilterSuccess({ access_token })),
    clearFilterState: ()=>dispatch(clearFilterState())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogProductFilter);