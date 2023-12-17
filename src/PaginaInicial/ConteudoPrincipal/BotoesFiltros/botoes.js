// Botoes.js
import React from 'react';
import { CardBotoes } from './cardBotoes.js';

export default function Botoes({ onCategoriaSelecionada }) {
  return (
    <div>
      <CardBotoes onCategoriaSelecionada={onCategoriaSelecionada} />
    </div>
  );
}
