import React from 'react';

function EditarAtividade() {
  return (
    <form id="editar-atividade" >
      <label for="titulo">Titulo:</label>
      <input value="<%= atividade.titulo %>" type="text" id="titulo" name="titulo" />

      <label for="recompensa">Recompensa:</label>
      <input value="<%= atividade.recompensa %>" type="text" id="recompensa" name="recompensa" />

      <label for="frequencia">Frequencia:</label>
      <input value="<%= atividade.frequencia %>" type="text" id="frequencia" name="frequencia" />

      <label for="concluida">Concluida:</label>
      <input value="<%= atividade.concluida %>" type="text" id="concluida" name="concluida" />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default EditarAtividade;
