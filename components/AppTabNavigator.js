import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookDonor from './screens/BookDonor';
import BookRequest from './screens/BookRequest';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonor,
        navigationOptions:{
            tabBarIcon:<Image source = {require("./assets/request-list.png")}
            styles = {{width:20,height:20}}/>,
            tabBarLabel:"Donate A Book"
        }
    },
        RequestBooks:{
            screen:BookRequest,
            navigationOptions:{
                tabBarIcon:<Image source = {require("./assets/request-book.png")}
                styles = {{width:20,height:20}}/>,
                tabBarLabel:"Request A Book"
        }
    }
})