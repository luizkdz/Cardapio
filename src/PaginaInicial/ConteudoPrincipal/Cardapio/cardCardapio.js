import React from 'react';
import {produtos} from './data-produtos.js';
import './style.css';

      export const CardCardapio = ({categoriaSelecionada}) => {
      
      const produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaSelecionada);
  
      
      
      return(
            <div className = "secao-cardapio">
              
                <h1 className="titulo-cardapio">Cardapio</h1>
                <div className = "area-cardapio">
                
                {produtosFiltrados.map((produto,index) => (
                <div key={index} className="card-cardapio">
                <img src={produto.imagem} alt={produto.nome} />
                <div className="area-texto-cardapio">
                <h1>{produto.nome}</h1>
                <p className="categoria">{produto.categoria}</p>
                
                <p className= "descricao">{produto.descricao}</p>
                <p className="preco">R${produto.preco}</p>
                </div>
              </div>
))};        
                </div>
                </div>
            
        )
                    
 }
