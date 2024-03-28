import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View,Image } from 'react-native';
import {styles} from './AppStyles.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#274360" barStyle="dark-content"/>
      <Image style={styles.imagens}
      source={require('./assets/astronauta.jpg')}
      />
      <Text style={styles.texto}>Esse é um pequeno passo para o homem, 
      mas um grande passo para a humanidade!</Text>
     
    </SafeAreaView>
  );
}


