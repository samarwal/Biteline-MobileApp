import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, AppRegistry} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import RestaurantButton from './RestaurantButton';
import NavBar from '../navigation/navBar';

export default class RestaurantScreen extends Component {

    goToRestaurant = () => {
        this.props.navigation.navigate('Menu');
    };

    static navigationOptions = {
        title: 'Restaurants',
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <RestaurantButton restaurantID={1} restaurantName="McDonald's" restaurantImage={require('../../images/MCD.png')} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.7} onPress={this.goToRestaurant}/>
                    <RestaurantButton restaurantID={2} restaurantName="Chillies" restaurantImage={require('../../images/chillies-logo-webnew.png')} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.2} onPress={this.goToRestaurant}/>
                    <RestaurantButton restaurantID={3} restaurantName="Subway" restaurantImage={require('../../images/Subway_Logo_OG.png')} restaurantHours='9am - 10pm' restaurantAddress='937 Albert St' starRating={4.0} onPress={this.goToRestaurant}/>
                    <RestaurantButton restaurantID={4} restaurantName="Currently Unavailable" restaurantImage={require('../../images/Placeholder.png')} restaurantHours='' restaurantAddress='' starRating={0} onPress={this.goToRestaurant}/>
                    <RestaurantButton restaurantID={5} restaurantName="Currently Unavailable" restaurantImage={require('../../images/Placeholder.png')} restaurantHours='' restaurantAddress='' starRating={0} onPress={this.goToRestaurant}/>
                    <RestaurantButton restaurantID={6} restaurantName="Currently Unavailable" restaurantImage={require('../../images/Placeholder.png')} restaurantHours='' restaurantAddress='' starRating={0} onPress={this.goToRestaurant}/>
                    <RestaurantButton restaurantID={7} restaurantName="Currently Unavailable" restaurantImage={require('../../images/Placeholder.png')} restaurantHours='' restaurantAddress='' starRating={0} onPress={this.goToRestaurant}/>
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
    filler: {
        height: 5,
    },
});

AppRegistry.registerComponent('RestaurantScreen', () => RestaurantScreen);