import React, {useState} from 'react';
import {Alimentos} from './colecaoAlimentosBotoes';
import './styleCardBotao.css';

// CardBotoes.js
export const CardBotoes = ({ onCategoriaSelecionada }) => {
    return (
      <div className="container-botoes">
        {Alimentos.map((alimento, index) => (
          <div
            className="card-botao"
            onClick={() => onCategoriaSelecionada(alimento.tipo)}
          >
            <img src={alimento.imagem} alt={alimento.tipo} />
            <div className="texto-botao">
              <span key={index}>{alimento.tipo}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  