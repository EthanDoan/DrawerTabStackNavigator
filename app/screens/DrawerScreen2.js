import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
// import { StackNavigator } from 'react-navigation'

/*
    We can use another StackNavigator here if there are more screens behind.
    If using StackNavigator, don't need to add HeaderComponent ->
    use StackNavigator header.
*/

export default class DrawerScreen2 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                    <Text style={{ alignSelf: 'center' }}>This is Drawer Screen 2</Text>
                </View>
            </View>
        )
    }
}