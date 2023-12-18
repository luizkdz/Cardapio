import React, { useState } from 'react';
import Lupa from '../../../ImagensDoProjeto/Assets/lupa.png';
import './style.css';
import { produtos } from '../Cardapio/data-produtos.js';
import {CardCardapio} from '../Cardapio/cardCardapio.js';

export const CampoDeBusca = () => {
  
  

  return (
    <div className="secao-pesquisa">
      <button type="button" className="input-com-imagem">
        <img src={Lupa} alt="Ícone de lupa" />
        <input
          className="input-botao"
          type="text" 
          placeholder="Pesquise aqui um dos nossos pratos"
        />
      </button>
    </div>
  );
};
