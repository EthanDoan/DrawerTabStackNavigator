import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import DetailScreen from '../screens/Detail';
import MainScreen from '../screens/MainScreen';

const StackNav = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions:({navigation}) => ({
            title: "Main Screen",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: (props) => ({
            title: "Detail",
        })
    }
})

export default StackNav;