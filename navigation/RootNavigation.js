import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home'

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: Home,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);


export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
