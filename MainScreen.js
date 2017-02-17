
import React, { Component } from 'react';
import Sound from 'react-native-sound';
import {playSound} from './Sounds';
import PresetsScreen from './PresetsScreen';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  AsyncStorage

} from 'react-native';

var _navigator;

export default class MainScreen extends Component {
  constructor(){
    super()
    this.one = 'one'
    this.two = "two"
    this.three = "three"
    this.four = "four"
    this.five = "five"
    this.six = "six"
    this.presetArray = ['/Club', '/Jazz', '/Funk', '/Ambient', '/Samples']

    // this.presetPath = this.presetArray[PresetsScreen.]
    this.presetPath = this.presetArray[4]

  }

  componentWillMount(){
    _navigator = this.props.navigator

  }
  buttonPressed(){
    _navigator.push({
      id: "PresetsScreen"
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => {playSound(this.one+'.wav', this.presetPath)}}>
          <View style={styles.pads}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {playSound(this.two+'.wav', this.presetPath)}}>
          <View style={styles.pads}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {playSound(this.three+'.wav', this.presetPath)}}>
          <View style={styles.pads}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {playSound(this.four+'.wav', this.presetPath)}}>
          <View style={styles.pads}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {playSound(this.five+'.wav', this.presetPath)}}>
          <View style={styles.pads}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {playSound(this.six+'.wav', this.presetPath)}}>
          <View style={styles.pads}></View>
        </TouchableOpacity>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 5,
    paddingTop: 95,
    backgroundColor: '#FBFC9F'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pads: {
    width: 180,
    height: 180,
    backgroundColor: '#CEEC95',
    margin: 1,
    borderColor: '#A2C55F',
    borderStyle: 'solid',
    borderRadius: 3,
    borderWidth: 3

    // borderSiz

  },
  txt: {
    color: "red",
  },

});
