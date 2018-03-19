import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  InteractionManager,
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 50,}}>Safex</Text>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Verify Sexual Consent Before Anything Happens.</Text>
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
});
