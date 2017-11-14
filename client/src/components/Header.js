import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import FetchCoinData from './../Actions/FetchCoinData';

class Header extends Component {
    render() {
        return (
            <View style={headerContainer}>
                <Text style={header}>
                    Crypto prices
            </Text>
                <Button
                    onPress={() => { this.props.FetchCoinData() }}
                    title="Reload"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 35,
        paddingBottom: 10,
        alignItems: "center",
        borderBottomColor: "#FAFAFA",
        borderBottomWidth: 2,
        elevation: 5,
        backgroundColor: "white"
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    }
})

const { headerContainer, header } = styles;

export default connect(null, { FetchCoinData })(Header);