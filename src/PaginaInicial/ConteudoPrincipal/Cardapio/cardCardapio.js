import React from 'react';
import {produtos} from './data-produtos.js';
import './style.css';

    export const CardCardapio = ({categoriaSelecionada}) => {
      const produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaSelecionada);
        return(
            <div>
                <h1>Cardapio</h1>
                <div className = "area-cardapio">
                
                {produtosFiltrados.map((produto,index) => (
                <div key={index} className="card-cardapio">
                
                <img src={produto.imagem} alt={produto.nome} />
                <div className="area-texto-cardapio">
                <h1>{produto.nome}</h1>
                <p>{produto.categoria}</p>
                <p>{produto.descricao}</p>
                <p>{produto.preco}</p>
                </div>
              </div>
  
))}
                
        
                </div>
                </div>
            
        )
                    
 }
