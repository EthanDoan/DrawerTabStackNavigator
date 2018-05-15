import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class TabScreen2 extends Component {

    goToProfile = () => {
        this.props.navigation.navigate('ProfileScreen')
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
                <Text style={{ alignSelf: 'center' }}>This is Tab screen 2</Text>
                <Button onPress={this.goToProfile} title='Go To Profile Screen' />                    
            </View>
        )
    }
}