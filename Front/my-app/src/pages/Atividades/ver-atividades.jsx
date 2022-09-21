import React, { useState } from 'react';

function VerAtividades() {
  const [data, setData] = useState([
    {
      id: 123,
      titulo: 'teste',
      recompensa: 123,
      frequencia: 2,
      concluida: true
    }
  ]);

  const handleCheck = (id) => {
    // make request
  }

  const handleDelete = (id) => {
    // make request
  }

  return (
    <>
      <h1>Ver Atividades</h1>

      <td> <a href="atividades/criar"> Criar Atividade</a></td>

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
              <td>{item?.titulo}</td>
              <td>{item?.recompensa}</td>
              <td>{item?.frequencia}</td>
              <td>{item?.concluida}</td>
              <td> <a href={`atividades/editar/${item?.id}`}> Editar </a></td>
              <td><button onClick={() => handleCheck(item?.id)}>Marcar como Concluida</button></td>
              <td><button onClick={() => handleDelete(item?.id)}>Excluir</button></td>
            </tr>
          ))
        }
      </table>
    </>
  );
}

export default VerAtividades
