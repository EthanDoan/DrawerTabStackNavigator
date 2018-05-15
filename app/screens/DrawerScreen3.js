import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import HeaderComponent from '../components/HeaderComponent'
// import { StackNavigator } from 'react-navigation'

export default class DrawerScreen3 extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                    <Text style={{ alignSelf: 'center' }}>This is Drawer Screen 3</Text>
                </View>
            </View>
        )
    }
}