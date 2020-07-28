import React from 'react';
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return(
    <TemplateBase>
      <h1>Cadastro de Novas Categorias</h1>
      <Link to="/">
        Voltar para a Home
      </Link>
    </TemplateBase>
  )
}

export default CadastroCategoria;