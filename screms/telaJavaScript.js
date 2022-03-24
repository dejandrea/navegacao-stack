import React from 'react';
import { Text, View, Button, Image } from 'react-native';

import javascriptImg from '../assets/javascript.png'
import estilo from '../componentes/estilo';

export default function TelaJavaScript (props) {
  return (
    <View style={ estilo.fundoJS }>
      <View style={ estilo.container }>
        <Image source={ javascriptImg } style={ estilo.logo }/>

        <Text style={ estilo.titulo }>
          JavaScript
        </Text>

        <Text style={ estilo.texto }>
          Veja 2 tecnologias para se tornar um programador fullstack web JavaScript.
        </Text>

        <View style = { estilo.boxBotoes }>
          <Button title="Front-end" onPress = { () => { props.navigation.navigate('React') } } />
          <Button title="Back-end" onPress = { () => { props.navigation.navigate('NodeJS') } } />
        </View>
      </View>
    </View>
  );
}