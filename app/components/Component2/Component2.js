/*@flow*/
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Button} from 'react-native';


type Props = {};
export default class olay extends Component<Props> {

  constructor(){
    super();
    this.state = {
      // numClicks: 0
      isClicked: true
    };
  }

  buttonIsClicked(){
    this.setState({isClicked: !this.state.isClicked})
    // this.setState((previousState)=>{
    //   buttonEvenNumberClicked: !previousState.buttonIsClicked;
    // });
  }

  render(){
    // const isClicked = this.state.isClicked;
    // const button1 =
    // const button2 =
    return(
      <View>
        //<Button onPress = {() => this.buttonIsClicked()} title = "Button1"></Button>
        { this.state.isClicked ? <Button onPress = {() => this.buttonIsClicked()} title = "Button1"></Button> : <Button onPress = {() => this.buttonIsClicked()} title = "Button2"></Button>}
        //{ isClicked ? button1 : button2 }
        <Text>{`${this.state.isClicked}`}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component2', () => Component2);
