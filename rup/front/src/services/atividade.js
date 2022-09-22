import uuid from 'react-uuid';
import api from './api';

export async function criarAtividade(item) {
  const { titulo, recompensa, frequencia } = item;

  return api.post('atividades', {
    id: uuid(),
    titulo,
    recompensa: Number(recompensa),
    frequencia: Number(frequencia),
    concluida: false,
  });
}

export async function editarAtividade(item) {
  const { id, titulo, recompensa, frequencia, concluida } = item;

  return api.patch(`atividades/${id}`, {
    titulo,
    recompensa: Number(recompensa),
    frequencia: Number(frequencia),
    concluida,
  });
}

export async function marcarComoConcluida(id) {

  return api.patch(`atividades/${id}`, {
    concluida: true,
  });
}

export async function getAtividades() {
  return api.get('atividades');
}

export async function getAtividadePorId(id) {
  return api.get(`atividades/${id}`);
}

export async function excluirAtividade(id) {
  return api.delete(`atividades/${id}`);
}
