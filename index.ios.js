
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableOpacity,
  Text

} from 'react-native';
var _navigator;

import MainScreen from './MainScreen'
import PresetsScreen from './PresetsScreen'

export default class drumpadApp extends Component {

  renderScene(route, navigator){
    if(route.id === 'MainScreen'){
      return(
        <MainScreen navigator={navigator}/>
      );
    }
    if(route.id == 'PresetsScreen'){
      return (
        <PresetsScreen navigator={navigator}/>
      );
    }
  }

  render() {
    return (
      <Navigator
        configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJump
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                { return (
                  <TouchableOpacity style={{margin:10, width:100}} onPress={()=>navigator.pop()}>
                    <Text style={{color:"white"}}>Back</Text>
                  </TouchableOpacity> )
                },

              RightButton: (route, navigator, index, navState) =>
                { return (<Text></Text>); },

              Title: (route, navigator, index, navState) =>
                { return (<Text style={{color:'white', fontWeight: 'bold'}}>Drumpad</Text>); },
            }}
            style={{backgroundColor: '#A2C55F'}}
          />
        }
        initialRoute={{id:"MainScreen", name:"MainScreen"}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('drumpadApp', () => drumpadApp);
