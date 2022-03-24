import React from 'react';
import { Text, View, Image } from 'react-native';

import reactImg from '../assets/react.png';
import estilo from '../componentes/estilo';

export default function TelaReact () {
  return (
    <View style = { estilo.fundoReact }>
      <View style = { estilo.container }>
        <Text style = { estilo.titulo }>
          React
        </Text>

        <Image source = { reactImg } style = { estilo.logo }/>

        <Text style = { estilo.texto }>
          React é uma biblioteca JavaScript utilizada no front-end para criar a camada visual de uma aplicação web utilizando JavaScript.
        </Text>
      </View>
    </View>
  );
}