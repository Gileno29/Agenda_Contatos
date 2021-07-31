import React, {Component} from 'react';
import {Text, View, Button, ScrollView,} from 'react-native';
import InputsScreen from './src/InputScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CriandoComponentScreen from './src/CriandoComponenteScreen';
import AppMenu from './src/AppMenu';
import PessoaScreen from './src/PessoaScreen';




const MainNavigator = createStackNavigator({

Pessoas: {screen: PessoaScreen},
	
    });



class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
        return {
         
          headerTitle: () => <Text style={{fontSize:20, marginLeft:20}}>Tela                  inicial</Text>,
          headerRight: () => <AppMenu navigation={navigation} />
        
        };
	};

  static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: () => <Text style={{fontSize:20, marginLeft:20}}>Tela                inicial</Text>,
          headerRight: () => <AppMenu navigation={navigation} />
          };
  	};




  render(){
		const { navigate } = this.props.navigation;		
		return <ScrollView>
    <Button onPress={() => navigate("Pessoas") } 
					title="Criando componente"/>


        </ScrollView>
  
  }
        
}

const App = createAppContainer(MainNavigator);

export default App;