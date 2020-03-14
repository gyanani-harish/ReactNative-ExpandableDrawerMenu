import React, { Component } from 'react';
//import react in our project
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default class ManagerComponent extends Component {
    render(){
        return (<View style={{backgroundColor:'red',height:100,width:100}}>
        <Text>Manager Dashboard</Text>
        </View>)
    }
}