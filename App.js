import React, { Component } from 'react';
import {
    View,
  } from 'react-native';
  import ManagerDrawerNavigator from './ManagerDrawerNavigator'
import EmployeeDrawerNavigator from './EmployeeDrawerNavigator';
export default class App2 extends React.Component{
    render(){
        if(true){
            return (
                <EmployeeDrawerNavigator />
            )
        }else{
          return (
              <ManagerDrawerNavigator />
          )
        }
    }
}