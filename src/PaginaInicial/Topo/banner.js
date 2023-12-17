import React from 'react';
import ImagemBanner from '../../ImagensDoProjeto/Assets/banner.png';
import "./style.css";

export default function Banner(){
    return(
        <div>
            <div className = "secao-banner">
                <img src = {ImagemBanner} className = "imagem-banner"/>
            <div className = "texto-sobreposto">
                <h1 class="titulo-restaurante">RESTAURANT</h1>
                <p>De pratos clássicos a criações surpreendentes,<br/> nosso cardápio é um requinte de sabores<br/> refinados</p>
            </div>
            </div>
        </div>
    )
}