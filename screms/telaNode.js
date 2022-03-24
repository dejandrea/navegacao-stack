import React from 'react';
import { Image, Text, View } from 'react-native';

import nodeImg from '../assets/node.png';
import estilo from '../componentes/estilo';

export default function TelaNode () {
  return (
    <View style = { estilo.fundoNode } >
      <View style = { estilo.container } >
        <Text style = { estilo.titulo }>
          Node.js
        </Text>

        <Image source = { nodeImg } style = { estilo.logo }/>

        <Text style = { estilo.texto }>
          Node.js é uma ferramenta que permite rodar JavaScript no servidor. Com isso você poderá criar o seu Back-end utilizando a linguagem JavaScript.
        </Text>
      </View>
    </View>
  );
}