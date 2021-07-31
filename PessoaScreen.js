import React, {Component} from 'react';
import {Text, TextInput, View, Button, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PessoaModel from './PessoaModel';



class PessoaScreen extends Component {
    static navigationOptions = {
		title: 'Agenda de Contatos',
	};

    state = {nome:"",fone:"", email:"",data_nascimento:"", lista:[]}

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
            var pessoa = {nome:this.state.nome, fone:this.state.fone,             email:this.state.email, data_nascimento:this.state.data_nascimento}
            if (pessoa.nome != "" && pessoa.fone != "" && pessoa.email!=""){
                this.pessoaModel.save(pessoa)
            } else {
                Alert.alert("Preencha o nome e o telefone.");
            }
            this.listar()
        }
        func()
    }

    deletar(id){
      this.pessoaModel.delete(id)
      this.listar()
        
     /* Alert.alert(
			'Confirmação', 'Deseja realmente excluir esse item?',
			[
			  {text: 'Sim', onLoad: () => {
				  	//deleta o item
                      
				}
			  },
			  {text: 'Cancel',style: 'cancel',}
			],
			{cancelable: false},
		  );*/
    }

    render(){
        return <View style={styles.container}>  
            
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
             <TextInput 
                placeholder="data de nascimento"
                onChangeText={text => this.setState({data_nascimento:text})}
                style={styles.textInput}/>

            <Button color="green"  title="SALVAR"
                    onPress={this.salvar.bind(this)}/>
            <View>
              <Text  style={styles.text}>Lista de Contatos  Salvos </Text>
            </View>
            
            <ScrollView>
            {this.state.lista.map((p, i) => 
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.linha}> Nome: {p.nome}       
                    </Text>
                    <Text style={styles.linha}> Telefone: {p.fone}    
                    </Text>
                    <Text style={styles.linha}> Email: {p.email}    
                    </Text>
                     <Text style={styles.linha}> Data De nascimento: {p.data_nascimento}    
                    </Text>
                    
                    
                    <Button color="#DC143C" title="DELETAR" key={i} 
                        onPress={() => this.deletar(i)} >>
                    </Button>
                </TouchableOpacity>

               
            )}
            </ScrollView>

            
            
        </View>

    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#F5FFFA",
    alignItens:'center',
    justifyContent:'center',
    padding:20


  },

  textInput:{
    width:'100',
    height:40,
    backgroundColor:'#EEE8AA',
    borderRadius:20,
    border:'black',
    paddingLeft:10,
    marginTop:8,
    marginLeft:5,
    color:'black',
    marginBottom:4

  },
  text:{
    marginTop:20,
    alignItens:'center',
    color:'black',
    marginLeft:65,
    fontSize:18,
    marginBottom:20,
    
    

  },
  linha:{
    alignContent:'flex',
    marginBottom:5

  },

  touch:{
    backgroundColor:'#87CEFA',
    padding:15,
    borderWidth:1,
    borderRadius:20,
    borderColor:"white"

  },
 

})
export default PessoaScreen;