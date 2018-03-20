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

const {height, width} = Dimensions.get('window');

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  submitLoginInfo() {
    FirebaseAPI.createAccount(this.state.email, this.state.password)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50,}}>Safex</Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Verify Sexual Consent Before Anything Happens.</Text>
        <View style={{height: 80}}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            blurOnSubmit={true}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            returnKeyType="done"
            blurOnSubmit={true}
            onChangeText={(text) => this.setState({password: text})}
            onSubmitEditing={() => {
              this.submitLoginInfo()
            }}
            value={this.state.password}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9afff',
    alignItems: 'center',
    justifyContent: 'center',
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
