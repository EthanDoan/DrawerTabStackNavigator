import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text>This is Profile screen</Text>
                <Button onPress={() => this.props.navigation.pop()} title='Go Back (pop)'/>
            </View>
        )
    }
}