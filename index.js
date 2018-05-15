import React, { Component } from 'react'
import { AppRegistry} from 'react-native'
import { DrawerNavigator} from 'react-navigation'
import Drawernav from './app/routes/Drawernav'

AppRegistry.registerComponent('DrawerTabStackNavigator', () => Drawernav)