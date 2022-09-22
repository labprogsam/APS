import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { editarAtividade, getAtividadePorId } from '../../services/atividade';

function EditarAtividade() {
  const history = useHistory();
  const {id} = useParams();

  const [item, setItem] = useState({});

  const getData = async () => {
    try {
      console.log(id)
      const response = await getAtividadePorId(id);
      console.log(response.data)
      setItem(response?.data);
    } catch {
      setItem({});
    }
  }

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (e, field) => {
    let newItem = item;
    newItem[field] = e.target.value;
    setItem({...newItem})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editarAtividade({ id, ...item });
    history.push("/atividades");
  }

  return (
    <form id="editar-atividade" onSubmit={(e) => handleSubmit(e)} >
      <label htmlFor="titulo">Titulo:</label>
      <input value={item?.titulo} onChange={(e) => handleChange(e, 'titulo')} type="text" id="titulo" name="titulo" />

      <label htmlFor="recompensa">Recompensa:</label>
      <input value={item.recompensa} onChange={(e) => handleChange(e, 'recompensa')} type="text" id="recompensa" name="recompensa" />

      <label htmlFor="frequencia">Frequencia:</label>
      <input value={item.frequencia} onChange={(e) => handleChange(e, 'frequencia')} type="text" id="frequencia" name="frequencia" />

      <label htmlFor="concluida">Concluida:</label>
      <input value={item.concluida} onChange={(e) => handleChange(e, 'concluida')} type="text" id="concluida" name="concluida" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default EditarAtividade;
