import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';

import RootNavigation from './navigation/RootNavigation';

//Automatically set to 'production' when published through Expo
var env = process.env.NODE_ENV || 'development';
// var env = 'production'
var config = require('./config')[env];

const firebaseConfig = {
   apiKey: config.database.firebaseApiKey,
   authDomain: config.database.firebaseAuthDomain,
   databaseURL: config.database.databaseURL,
 } 

firebase.initializeApp(firebaseConfig)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
