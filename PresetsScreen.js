
import React, { Component } from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

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

export default class PresetsScreen extends Component {
  constructor(){
    super()
    this.selectedPreset = 4
  }

  componentWillMount(){
    _navigator = this.props.navigator
  }
  buttonPressed(){
    _navigator.pop({
    })
  }

  render() {
    return (
      <View style={styles.container}>
           <ModalDropdown
             options={['/Club', '/Jazz', '/Funk', '/Ambient', '/Samples']}
             onSelect={(idx, value) => {

               this.selectedPreset=idx

             }}
             />
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
    paddingTop: 110,
  },
});
