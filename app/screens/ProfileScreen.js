import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center' }}>This is Profile screen</Text>
            </View>
        )
    }
}