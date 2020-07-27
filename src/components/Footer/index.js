import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p  style={{fontFamily: "Sans-serif" }} >
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" style={{fontFamily: "Sans-serif" }}>
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
