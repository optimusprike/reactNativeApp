/* @flow */
import React, {Component} from 'react';
import {AppRegistry, Text, View, Image, StyleSheet} from 'react-native';

type Props = {
  name:"Prakash"

};

export default class Component1 extends Component<Props> {
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    const x = "Hi";
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1',() => Component1)

// import React, {Component} from 'react';
// import { AppRegistry, FlatList, ActivityIndicator, Text, View  } from 'react-native';
//
// export default class Component1 extends Component {
//
//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }
//
//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){
//
//         });
//
//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }
//
//
//
//   render(){
//
//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }
//
//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('Component1',() => Component1)
