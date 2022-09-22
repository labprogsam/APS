import React, { useEffect, useState } from 'react';
import { getAtividades, excluirAtividade, marcarComoConcluida } from '../../services/atividade';

function VerAtividades() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await getAtividades();
      console.log(response.data)
      setData(response?.data);
    } catch {
      setData([]);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleCheck = async (id) => {
    await marcarComoConcluida(id);
    getData();
  }

  const handleDelete = async (id) => {
    await excluirAtividade(id);
    getData();
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
              <td>{item?.concluida.toString()}</td>
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
