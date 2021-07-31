import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PessoaModel from './PessoaModel'


class PessoaScreen extends Component {
    static navigationOptions = {
		title: 'Agenda de Contatos',
	};

    state = {nome:"",fone:"", email:"", lista:[]}

    pessoaModel = new PessoaModel()

    componentDidMount(){
        this.listar()
    }


    listar(){
        var func = async () => {
            var pessoas = await this.pessoaModel.getAll();
            console.log(pessoas);
            this.setState({lista:pessoas})
        }
        func()
    }

    salvar(){
        var func = async () => {
            var pessoa = {nome:this.state.nome, fone:this.state.fone,          email:this.state.email}
            if (pessoa.nome != "" && pessoa.fone != ""){
                this.pessoaModel.save(pessoa)
            } else {
                Alert.alert("Preencha o nome e o telefone.");
            }
            this.listar()
        }
        func()
    }

    deletar(id){
        Alert.alert(
			'Confirmação', 'Deseja realmente excluir esse item?',
			[
			  {text: 'Sim', onPress: () => {
				  	//deleta o item
                      this.pessoaModel.delete(id)
                      this.listar()
				}
			  },
			  {text: 'Cancel',style: 'cancel',}
			],
			{cancelable: false},
		  );
    }

    render(){
        return <View>  
            
            <TextInput 
                placeholder="Nome"
                onChangeText={text => this.setState({nome:text})} 
                style={styles.textInput}/>

            <TextInput 
                placeholder="Telefone"
                onChangeText={text => this.setState({fone:text})}
                style={styles.textInput}/>
            <TextInput 
                placeholder="email"
                onChangeText={text => this.setState({email:text})}
                style={styles.textInput}/>

            <Button title="SALVAR"
                    onPress={this.salvar.bind(this)}/>
            
            <ScrollView>
            {this.state.lista.map((p, i) => 
                <TouchableOpacity key={i} 
                                  onPress={ () => this.deletar(i)}>
                    <Text style={styles.line}>{p.nome} - {p.fone} - {p.email}</Text>
                </TouchableOpacity>
            )}
            </ScrollView>
            
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
export default PessoaScreen;