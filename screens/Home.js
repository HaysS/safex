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

  signoutButton() {
    return (
      <View style={{width: width, height:height/8,}}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {}}>
          <View style={styles.bottomOptionContainer}>
            <Text style={styles.logout}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  watchForUserSignIn() {
    this.setState({unsubscribe: firebase.auth().onAuthStateChanged((user) => {
        if(user != null) {
          this.setState({user})

          FirebaseAPI.getUserCb(user.uid, (oldUser) => {
            if(oldUser == null)
              FirebaseAPI.createUser(user)
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
        {this.signoutButton()}
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
  bottomOptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  logout: {
    fontSize: 24, 
    color: '#2B2B2B',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
