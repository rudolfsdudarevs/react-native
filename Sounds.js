
import React, { Component } from 'react';
import Sound from 'react-native-sound';
// import PresetsScreen './PresetsScreen';
import {

} from 'react-native';

var rootPath = '/Users/student/Downloads/SAMPLESWAP'

export function playSound(id, presetPath){
    const mySound = new Sound(id, rootPath+presetPath, (e) => {
      if (e) {
        console.log('NEKAS   NESTRADA');
      }
      else {
        console.log('....');
        mySound.play();
      }
    })
}
