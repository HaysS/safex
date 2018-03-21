import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  InteractionManager,
  TextInput,
} from 'react-native';

import * as FirebaseAPI from '../api/firebaseAPI'
import firebase from 'firebase'

import Login from './Login'

const {height, width} = Dimensions.get('window');

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Safex',
    headerLeft: null,
    gesturesEnabled: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: null,
      unsubscribe: null,
    }
  }

  componentWillMount() {
    firebase.auth().signOut() 

    if(this.state.user == null)
      this.watchForUserSignIn()
  }

  componentWillUnmount() {
    // firebase.auth().signOut()
  }

  watchForUserSignIn() {
    this.setState({unsubscribe: firebase.auth().onAuthStateChanged((user) => {
        if(user != null) {
          this.setState({user})

          FirebaseAPI.getUserCb(user.uid, (user) => {
            if(user == null)
              FirebaseAPI.updateUser(user)
          })

          // console.log('watchForUserSignIn: ', FirebaseAPI.getUser(user.uid))

          //Unsubscribe to kill listener once called
          this.state.unsubscribe()
        }
      })
    })
  }

  showLogin() {
    if(this.state.user == null)
      return <Login />
  }

  render() {
    return (
      <View style={styles.container}>
        {this.showLogin()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    width: width,
    height: 38,
    lineHeight: 28,
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize:26,
    color: '#565656',
    textAlign: 'left',
    backgroundColor: 'white',
  },
});
