import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, AppRegistry, AsyncStorage} from 'react-native';

import MenuItem from './MenuItem';
import NavBar from '../navigation/navBar';
import CartScreen from "../cart/CartScreen";

var globalCart = {
    items: [],
    total: 0,
    totalItems: 0
};

var foodItem = function(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = 0;
};

var saveData = function() {
    AsyncStorage.setItem('cart', JSON.stringify(globalCart));
    GLOBAL.globalCart = globalCart;
};

async function getData() {
    var cart = null;
    try {
        let json = await AsyncStorage.getItem('cart');
        if (json != null)
            cart = JSON.parse(json);

    } catch(e) {

    }
    return cart;
}

getData().then(value => {
    if (value != null)
    {
        globalCart.items = value.items;
        globalCart.total = value.total;
        globalCart.totalItems = value.totalItems;

        GLOBAL.globalCart = globalCart;
    }
});

export default class MenuScreen extends Component {

    addMenuItem = (itemName, itemNumber, itemPrice) => {
        if (globalCart.items[itemNumber-1] == null)
            globalCart.items[itemNumber-1] = new foodItem(itemNumber, itemName, itemPrice);

        globalCart.items[itemNumber-1].qty++;
        globalCart.total+=itemPrice;
        globalCart.totalItems++;
        saveData();
    };

    static navigationOptions = {
        title: 'Menu',
    };

    render() {
        getData();
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <MenuItem itemName='Fries - Small' itemNumber={1} itemPrice={1.99} onPress={this.addMenuItem}/>
                    <MenuItem itemName='Fries - Medium' itemNumber={2} itemPrice={2.99} onPress={this.addMenuItem}/>
                    <MenuItem itemName='Fries - Large' itemNumber={3} itemPrice={3.50} onPress={this.addMenuItem}/>
                    <MenuItem itemName='Big-Mac' itemNumber={4} itemPrice={4.99} onPress={this.addMenuItem}/>
                    <MenuItem itemName='Double Big-Mac' itemNumber={5} itemPrice={5.99} onPress={this.addMenuItem}/>
                    <MenuItem itemName='Coke - Small' itemNumber={6} itemPrice={1.00} onPress={this.addMenuItem}/>
                    <MenuItem itemName='Coke - Medium' itemNumber={7} itemPrice={1.00} onPress={this.addMenuItem}/>
                    <MenuItem itemName='Coke - Large' itemNumber={8} itemPrice={1.00} onPress={this.addMenuItem}/>
                    <View style={styles.filler}/>
                </ScrollView>
                <NavBar navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F4F5',
    },
    menuTitle: {
        textAlign: 'center',
        color: 'black',
        fontSize: 35,
        marginTop: 15,
    },
    filler: {
        height: 20,
    },
});

AppRegistry.registerComponent('MenuScreen', () => MenuScreen);