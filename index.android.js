import React,{Component} from 'react';
import {AppRegistry, Text,View} from 'react-native';
import Project from './app/components/componentProject/componentProject';
import Task from './app/components/componentTask/componentTask';
import Folder from './app/components/componentFolder/componentFolder';
import Main from './app/components/componentMain/componentMain';

export default class TaskManager_mobileapp extends Component{
  render(){
    return(
      <Main />
    )
  }
}

AppRegistry.registerComponent('TaskManager_mobileapp',()=> TaskManager_mobileapp);
