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

const {height, width} = Dimensions.get('window');

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50,}}>Safex</Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Verify Sexual Consent Before Anything Happens.</Text>
        <View style={{flex: 1}}>
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
            blurOnSubmit={true}
            onChangeText={(text) => this.setState({password: text})}
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
