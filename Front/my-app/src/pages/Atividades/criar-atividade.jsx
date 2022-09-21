import React, { useState } from 'react';

function CriarAtividade() {
  const [item, setItem] = useState({
    titulo: '',
    recompensa: '',
    frequencia: '',
    concluida: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e, field) => {
    let newItem = item;
    newItem[field] = e.target.value;
    setItem({...newItem})
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="titulo">Titulo:</label>
      <input value={item?.titulo} onChange={(e) => handleChange(e, 'titulo')} type="text" id="titulo" name="titulo" />

      <label htmlFor="recompensa">Recompensa:</label>
      <input value={item?.recompensa} onChange={(e) => handleChange(e, 'recompensa')} type="text" id="recompensa" name="recompensa" />

      <label htmlFor="frequencia">Frequencia:</label>
      <input value={item?.frequencia} onChange={(e) => handleChange(e, 'frequencia')} type="text" id="frequencia" name="frequencia" />

      {/* <label htmlFor="concluida">Concluida:</label>
      <input value={item?.concluida} onChange={(e) => handleChange(e, 'concluida')} type="text" id="concluida" name="concluida" /> */}

      <button type="submit">Submit</button>
    </form>
  )
}

export default CriarAtividade;
