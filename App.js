/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native, swaggy!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});*/

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
//import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
type Props = {};
export default class olay extends Component<Props> {

  render(){
    ///const { shirts } = this.props;
    return(
      <View>
        <Component2 />
      </View>
    );
  }
}

AppRegistry.registerComponent('olay', () => olay);
