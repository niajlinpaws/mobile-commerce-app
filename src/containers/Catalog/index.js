import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert, FlatList } from 'react-native';
import { StackActions } from 'react-navigation';
import { connect } from "react-redux";
import Item from "../../components/Item";
import CatalogPage from "../../pages/Catalog";
import { catalogSuccess, catalogGoBack, toggleRootCategory, toggleRootCatalog } from "../../actions";

class Catalog extends Component {

  componentDidMount() {
    this.fetchCatalog();
  }

  catalogGoBack() {
    Promise.resolve()
      .then(() => this.props.navigation.goBack())
      .then(() => this.props.catalogGoBack())
      .then(() => this.props.catalog.data.length === 1 && this.props.toggleRootCatalog())
  }

  pushRouter({ routeName, params }) {

    this.props.navigation.dispatch(StackActions.push({
      routeName,
      params
    }));
  }

  toggleRootCategory() {
    Promise.resolve()
      .then(() => this.props.toggleRootCategory())
      .then(() => this.fetchCatalog());
  }

  onItemPress(item) {
    const data = this.props.catalog.data;
    Promise.resolve()
      .then(() => data.length === 1 && this.props.toggleRootCatalog())
      .then(() => item.has_child * 1 ? this.fetchSubCatalog(item.cat_id, item.title) :
        this.pushRouter({
          routeName: 'CatalogProduct',
          params: {
            category_id: item.cat_id,
            heading: data[data.length - 1].heading
          }
        })
      )
  }

  fetchCatalog(category, heading = 'Catalog') {
    const { auth: { user_data: { token } }, catalog: { rootCatalog, rootCategory } } = this.props;
    this.props.catalogSuccess(token, rootCatalog ? rootCategory : category, heading);
  }

  fetchSubCatalog(category, heading) {
    Promise.resolve()
      .then(() => this.pushRouter({
        routeName: 'Catalog'
      }))
      .then(() => this.fetchCatalog(category, heading));
  }

  renderItem(item) {
    return (
      <Item
        navigation={this.props.navigation}
        listItemText={item.title}
        borderWidth={.5}
        onPress={() => this.onItemPress(item)}
      />
    );
  }

  render() {
    const { loading, rootCategory, rootCatalog, data } = this.props.catalog;
    const { heading, categories } = data[data.length - 1];
    const list = (
      <FlatList
        data={categories}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
    return (
      <CatalogPage
        navigation={this.props.navigation}
        catalogGoBack={() => this.catalogGoBack()}
        heading={heading}
        list={list}
        loading={loading}
        rootCatalog={rootCatalog}
        rootCategory={rootCategory}
        toggleRootCategory={() => this.toggleRootCategory()}
      />
    );
  }
}

Catalog.propTypes = {
  auth: PropTypes.object,
  catalog: PropTypes.object,
};
const mapStateToProps = state => ({
  auth: state.auth,
  catalog: state.catalog
});
const mapDispatchToProps = dispatch => ({
  catalogSuccess: (access_token, category_id, heading) => dispatch(catalogSuccess({
    access_token,
    category_id,
    heading
  })),
  catalogGoBack: () => dispatch(catalogGoBack()),
  toggleRootCategory: () => dispatch(toggleRootCategory()),
  toggleRootCatalog: () => dispatch(toggleRootCatalog())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
