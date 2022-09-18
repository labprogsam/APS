import React from 'react';

function CriarAtividade() {
  return (
    <form>
      <label for="titulo">Titulo:</label>
      <input type="text" id="titulo" name="titulo" />

      <label for="recompensa">Recompensa:</label>
      <input type="text" id="recompensa" name="recompensa" />

      <label for="frequencia">Frequencia:</label>
      <input type="text" id="frequencia" name="frequencia" />

      <label for="concluida">Concluida:</label>
      <input type="text" id="concluida" name="concluida" />

      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default CriarAtividade;
