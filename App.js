import * as React from 'react';
import {Text, View, Button, TouchableOpacity, ScrollView, TextInput, StyleSheet, Image, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icone from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
import cadastroItem from './src/Model/cadastroItem';
import crud_rn from './src/Database/crud_rn';
//O arquivo da database foi editado, mas talvez não seja utilizado no momento, mas já tem mais de três requisitos no projeto//

const App = () => {
    useEffect( () => {
      SplashScreen.hide();
    }, []);
  
    return (
      <View style={styles.container}>
        <Text>Seu aplicativo foi carregado com sucesso!</Text>
      </View>
    );
  }  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 250,
      alignItems: "center"
    }
  });
  //Splas Screen//
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 26, margin: 20}}>Bem-vindo(a) ao Vida Fitness!</Text>
      <Button
        title="Ir para a tela de cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
    //Essa é a tela inicial//
  );
}

function Cadastro() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 , padding: 10}}>
     <TextInput placeholder='Nome' style={estilo.texto}>Nome:</TextInput>
     <TextInput placeholder='Idade' style={estilo.texto}>Idade:</TextInput>
     <TextInput placeholder='Peso1' style={estilo.texto}>Seu peso:</TextInput>
     <TextInput placeholder='Peso2' style={estilo.texto}>Deseja perder ou ganhar peso?</TextInput>
      <View style={estilo.areaBotao}>
      <TouchableOpacity style={estilo.botao} onPress={() => Alert.alert('Cadastro realizado com sucesso! Vá para a tela de pratos sugeridos.')}>
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20 , margin: 10, textAlign: 'center'}}>Enviar</Text>
      </TouchableOpacity>
      </View>
    </View>
    //Botão de enviar não leva para lugar nenhum no momento, aparece uma mensagem de envio//
  );
}

function Pratossugeridos() {
    return (
       <ScrollView>
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 , padding: 10}}>
       <Image source={require('./frango_cremoso_rapidinho_8262_orig.jpg')} style={estilo.imagem}></Image>
        <Text style={{color: 'black', fontSize: 24, margin: 10, fontWeight: 'bold'}}>Frango cremoso fit</Text>
        <Text style={estilo.textoDescricao}>Bom para servir com arroz branco ou chips de batata doce.</Text>
        <Text style={estilo.textoAvaliacao}>Avaliações: 10/10</Text>
        <Image source={require('./receitas-de-salada-de-frutas-simples-1200x738-1-1.jpg')} style={estilo.imagem}></Image>
        <Text style={{color: 'black', fontSize: 24, margin: 10, fontWeight: 'bold'}}>Salada de frutas</Text>
        <Text style={estilo.textoDescricao}>Você fazer essa salada com mamão, maçã, pera, etc..</Text>
        <Text style={estilo.textoAvaliacao}>Avaliações: 8/10</Text>
        <Image source={require('./IMG_9115-1024x683.jpg')} style={estilo.imagem}></Image>
        <Text style={{color: 'black', fontSize: 24, margin: 10, fontWeight: 'bold'}}>Peixe na AirFryer</Text>
        <Text style={estilo.textoDescricao}>Ótima opção para você que quer comer um bom filé de peixe sem precisar 
        se preocupar com as calorias.</Text>
        <Text style={estilo.textoAvaliacao}>Avaliações: 9/10</Text>
        <Image source={require('./877-27022015104213.jpg')} style={estilo.imagem}></Image>
        <Text style={{color: 'black', fontSize: 24, margin: 10, fontWeight: 'bold'}}>Salada diet</Text>
        <Text style={estilo.textoDescricao}>Coma essa salada para perder a gordura localizada.</Text>
        <Text style={estilo.textoAvaliacao}>Avaliações: 10/10</Text>
      </View>
      </ScrollView>
      //Sugestões fixas no momento//
    );
  }
  


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Início" 
        component={HomeScreen}
        options={{
            tabBarIcon: ({color, size}) => (
                <Icone name="home" color={color} size={size}/>
            )
        }} 
        />
        <Tab.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{
            tabBarIcon: ({color, size}) => (
                <Icone name="clipboard" color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen 
        name="Pratos sugeridos" 
        component={Pratossugeridos}
        options={{
            tabBarIcon: ({color, size}) => (
                <Icone name="ios-restaurant-outline" color={color} size={size}/>
            )
            
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    //Criação da tabbar e dos ícones//
  );
}

const estilo = StyleSheet.create({
    texto:{
        fontSize: 24,
        color: 'black'
    },
    textoDescricao:{
        fontSize:20,
        color: 'black',
        margin: 8
    },
    textoAvaliacao:{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        margin: 11
    },
    imagem:{
        width:130,
        height: 130,
        margin: 11
    },
    botao:{
        backgroundColor:'lightgray',
        width: 110,
        margin: 20,
        borderRadius: 20
    },
    areaBotao:{
        alignItems: 'center'
    }
    //Estilos//
})


  
   

