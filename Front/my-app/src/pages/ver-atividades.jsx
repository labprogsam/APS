import React, { useState } from 'react';

function VerAtividades() {
  const [data, setData] = useState([]);
  return (
    <>
      <h1>Ver Atividades</h1>

      <td> <a href="atividades/criar"> Criar Atividade |</a></td>
      <td> <a href="gerar-boleto"> Gerar Boleto |</a></td>
      <td> <a href="pagar-cartao"> Pagar Cartão</a></td>

      <table>
        <tr>
          <th>Titulo</th>
          <th>Recompensa</th>
          <th>Frequencia</th>
          <th>Concluida</th>
          <th>Editar</th>
          <th>Marcar Com Concluida</th>
          <th>Excluir</th>
        </tr>
        {
          data.map((item) => (
            <tr>
              <td>{item.titulo}</td>
              <td>{item.recompensa}</td>
              <td>{item.frequencia}</td>
              <td>{item.concluida}</td>
              <td> <a href="atividades/editar/<%= atividades[i].id"> Editar </a></td>
              <td> <a href="atividades/concluida/<%= atividades[i].id"> Marcar como Concluida </a></td>
              <td> <a href="atividades/excluir/<%= atividades[i].id"> Excluir </a></td>
            </tr>
          ))
        }
      </table>
    </>
  );
}

export default VerAtividades
