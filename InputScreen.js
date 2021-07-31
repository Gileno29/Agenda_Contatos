import React, {Component} from 'react';
import {Button, View, Text, TextInput, Image, StyleSheet, useState} from 'react-native';
import {AsyncStorage, Alert} from 'react-native';





class InputsScreen extends Component {



	static navigationOptions = {
			title: 'Agenda',
	};
  
	state = {nome:"", email:"",numero:""}


	enviar(){
		console.log(this.state.nome);
	}


testeSalvar(){
  var func = async () => {
    try {
      await AsyncStorage.setItem("nome", "João");
    } catch (error) {
    console.log(error);
  }
  }
    func();
}


  testeRecuperar(){
    var func = async () => {
      try {
        var nomeSalvo = await AsyncStorage.getItem("nome");
        Alert.alert(nomeSalvo)
      } catch (error) {

      console.log(error);
          }
        }
    func();
    }


  render(){
    return <View>
        <Image style={{width:400,height:120}} source={(require("../wp2601081-kali-linux-wallpaper-1920x1080.jpg"))}></Image>
		<Text>{this.state.nome}</Text>


    <View style={styles.input}>
      <TextInput placeholder="nome"
        autoFocus={true}
        onChangeText={text => this.setState({nomel:text})}
        keyboardType="text"
        //value={this.state.nome} 
        style={styles.textInput}
        />
          <TextInput placeholder="email" 
        autoFocus={true}
        onChangeText={text => this.setState({email:text})}
        keyboardType="text"
        //value={this.state.email}
         style={styles.textInput}
        />
          <TextInput placeholder="numero"
        autoFocus={true}
        onChangeText={text => this.setState({numero:text})}
        keyboardType="numeric"
       // value={this.state.numero} 
       style={styles.textInput}
        />
      <Button onPress={this.enviar.bind(this)} 
          title="Salvar"/>

    </View>
	</View>
 	}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItens:'center',
    justifyContent:'center'


  },

  textInput:{
    width:'100',
    height:40,
    backgroundColor:'black',
    borderRadius:20,
    border:'black',
    paddingLeft:10,
    marginTop:8,
    marginLeft:5,
    color:'white',
    marginBottom:4

  }



})


export default InputsScreen;