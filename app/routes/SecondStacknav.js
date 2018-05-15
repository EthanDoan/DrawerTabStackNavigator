import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import ProfileScreen from '../screens/ProfileScreen';
import TabScreen2 from '../screens/TabScreen2';

const SecondStacknav = StackNavigator({
    TabScreen2: {
        screen: TabScreen2,
        navigationOptions:({navigation}) => ({
            title: "Tab Screen 2",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: (props) => ({
            title: "Profile",
        })
    }
})

export default SecondStacknav;