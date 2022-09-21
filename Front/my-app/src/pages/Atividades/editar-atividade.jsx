import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function EditarAtividade() {
  const {id} = useParams;

  const [item, setItem] = useState({
    titulo: 'Titulo',
    recompensa: 'recompensa',
    frequencia: 'frequencia',
    concluida: false,
  });

  const handleChange = (e, field) => {
    let newItem = item;
    newItem[field] = e.target.value;
    setItem({...newItem})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
