import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <TemplateBase>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
        label="Descrição"
          type="textfield"
          value={values.descricao}
          name='descricao'
          onChange={handleChange}
        />

        <FormField
        label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`} >
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Voltar para a Home
      </Link>
    </TemplateBase>
  )
}

export default CadastroCategoria;