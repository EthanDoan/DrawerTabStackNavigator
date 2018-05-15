import React, { Component } from 'react'
import { Dimensions, View, Image, StyleSheet } from 'react-native'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import Tabnav from './Tabnav';
import MainScreen from '../screens/MainScreen'
import DrawerScreen2 from '../screens/DrawerScreen2'
import DrawerScreen3 from '../screens/DrawerScreen3'

/*
//Drawer have items only
const Drawernav = DrawerNavigator({
    DrawerItem1: {
        screen: Tabnav,
        navigationOptions: {
            drawerLabel: "Drawer Item 1",
            drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        },
    },
    DrawerItem2: {
        screen: Tabnav,
        navigationOptions: {
            drawerLabel: "Drawer Item 2",
            drawerIcon: ({ tintColor }) => <Icon name="phone" size={24} />
        },
    },
    DrawerItem3: {
        screen: Tabnav,
        navigationOptions: {
            drawerLabel: "Drawer Item 3",
            drawerIcon: ({ tintColor }) => <Icon name="battery" size={24} />
        },
    }
})
*/


//Drawer with more custom
const { width, height } = Dimensions.get('window')
const drawerContentComponent = (props) => (
    <View>
        <View style={styles.drawerHeader}>
            <Image
                style={styles.drawerImage}
                source={require('../../resource/cloud-icon.png')}
            />
        </View>
        <View>
            <DrawerItems {...props} />
        </View>
    </View>
)

const routeConfigs = {
    Tabnav: {
        screen: Tabnav,
        navigationOptions: {
            drawerLabel: "Drawer default",
            drawerIcon: ({ tintColor }) => <Icon name="rocket" size={24} />
        },
    },
    DrawerScreen2: {
        screen: DrawerScreen2,
        navigationOptions: {
            drawerLabel: "Drawer Item 2",
            drawerIcon: ({ tintColor }) => <Icon name="photo" size={24} />
        },
    },
    DrawerScreen3: {
        screen: DrawerScreen3,
        navigationOptions: {
            drawerLabel: "Drawer Item 3",
            drawerIcon: ({ tintColor }) => <Icon name="flag" size={24} />
        },
    }
}

const drawerNavigatorConfig = {
    initialRouteName: 'Tabnav',
    drawerWidth: width * 2 / 3,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: drawerContentComponent,
    contentOptions: {
        activeTintColor: 'red'
    }
}
const Drawernav = DrawerNavigator(routeConfigs, drawerNavigatorConfig)

const styles = StyleSheet.create({
    drawerHeader: {
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'indigo'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
})

export default Drawernav