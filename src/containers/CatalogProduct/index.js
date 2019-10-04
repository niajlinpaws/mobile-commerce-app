import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, FlatList } from 'react-native';
import { connect } from "react-redux";
import CardWithName from "../../components/CardWithName";
import CatalogProductPage from "../../pages/LikedItems";
import { catalogProductSuccess, catalogProductPullToRefresh, catalogGoBack } from "../../actions";
import col from './style';


class CatalogProduct extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    catalogGoBack() {

        Promise.resolve()
        .then(() => this.props.navigation.goBack())
        .then(() => this.props.catalogGoBack())
    }

    fetchData(page) {
        const { heading, category_id } = this.props.navigation.state.params;
        this.props.catalogProductSuccess(
            this.props.auth.user_data.token,
            heading,
            category_id,
            page ? page : this.props.catalog.nextPage
        );
    }


    handleRefresh = () => {
        this.props.catalogProductPullToRefresh() && this.fetchData(1);
    }

    openCatalogFilter(){
        this.props.navigation.navigate('CatalogProductFilter',{
            category_id: this.props.navigation.state.params.category_id
        });
    }

    renderItem(item) {
        return (
            <View style={col}>
                <CardWithName
                    cardBg={{ uri : item.image }}
                    cardName={item.title}
                    onPress={()=>this.props.navigation.navigate('ProductDetail', {
                        product_id: item.id,
                    })}
                // heartIcon={require('../assets/img/heartIconBorder.png')}    
                />
            </View>
        );
    }


    render() {
        const { data } = this.props.catalog;
        const { heading, products } = data[data.length - 1];

        const list = (
            <FlatList
                refreshing={this.props.catalog.pullToRefresh}
                onRefresh={this.handleRefresh}
                data={products}
                renderItem={({ item }) => this.renderItem(item)}
                onEndReachedThreshold={0.7}
                onEndReached={({ distanceFromEnd }) => distanceFromEnd > 0 && this.fetchData()}
            />
        );
        return (
            <CatalogProductPage
                heading={heading}
                list={list}
                loading={this.props.catalog.loading}
                catalogGoBack={()=>this.catalogGoBack()}
                openCatalogFilter={()=>this.openCatalogFilter()}
            />
        );
    }
}

CatalogProduct.propTypes = {
    auth: PropTypes.object,
    catalog: PropTypes.object,
};



const mapStateToProps = state => ({
    auth: state.auth,
    catalog: state.catalog
});

const mapDispatchToProps = dispatch => ({
    catalogGoBack: () => dispatch(catalogGoBack()),
    catalogProductSuccess: (access_token, heading, category_id, page, params = {}) => dispatch(catalogProductSuccess({
        access_token,
        heading,
        category_id,
        page,
        params
    })),
    catalogProductPullToRefresh: () => dispatch(catalogProductPullToRefresh()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogProduct);
