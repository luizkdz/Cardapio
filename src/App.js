import './App.css';
import Banner from '../src/PaginaInicial/Topo/banner.js';
import Botoes from '../src/PaginaInicial/ConteudoPrincipal/BotoesFiltros/botoes.js';
import { CampoDeBusca } from '../src/PaginaInicial/ConteudoPrincipal/CampoDeBusca/busca.js';
import { CardCardapio } from '../src/PaginaInicial/ConteudoPrincipal/Cardapio/cardCardapio.js';
import { Alimentos } from '../src/PaginaInicial/ConteudoPrincipal/BotoesFiltros/colecaoAlimentosBotoes.js';
import React, { useState } from 'react';

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleCategoriaSelecionada = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <div className="App">
      <Banner />
      <Botoes onCategoriaSelecionada={handleCategoriaSelecionada} />
      <CampoDeBusca />
      <CardCardapio categoriaSelecionada={categoriaSelecionada} />
    </div>
  );
}

export default App;
