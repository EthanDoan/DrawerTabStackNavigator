import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import StackNav from './Stacknav';
import SecondStacknav from './SecondStacknav'

const tabNav = TabNavigator({
    TabItem1: {
        screen: StackNav,
        navigationOptions: {
            tabBarLabel:"Tab 1",
            tabBarIcon: ({ tintColor }) => <Icon name={"star"} size={30} color={tintColor} />
        }
    },
    TabItem2: {
        screen: SecondStacknav,
        navigationOptions: {
            tabBarLabel:"Tab 2",
            tabBarIcon: ({ tintColor }) => <Icon name={"gear"} size={30} color={tintColor} />
        }
    }
    ///... add more tabs here
    
}, {
        tabBarOptions: {
            activeTintColor: '#222',
        }
});

export default tabNav;