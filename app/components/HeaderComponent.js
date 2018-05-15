import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    Button,
    StyleSheet
} from 'react-native'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{ marginLeft: 10, marginTop: 20 }}
                    onPress={() => {
                        this.props.navigation.openDrawer()
                    }}
                >
                    <Image
                        style={{ width: 32, height: 32 }}
                        source={require('../../resource/menu-icon.png')}
                    />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#a4a4a4'
    }
})