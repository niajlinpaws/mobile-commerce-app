import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class Loading extends Component {
    render() {
        const { size } = this.props;
        return (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size={size || 'large'} />
            </View>
        );
    }
};

const styles = {
    loaderStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default Loading;