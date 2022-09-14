import { Atividade } from "./atividade.entity";
import { atividadeRepository } from "../dados/atividade.repository";

export class CadastroAtividade {

  constructor() {}
  
  async verAtividades(): Promise<Atividade[]> {
    const atividades = await atividadeRepository.verAtividades();
    return atividades;
  }

  async verAtividadePorId(id: string): Promise<Atividade | null> {
    const atividade = await atividadeRepository.verAtividadePorId(id);
    return atividade;
  }

  async criarAtividade(atividade: Atividade): Promise<void> {
    await atividadeRepository.criarAtividade(atividade);
  }

  async editarAtividade(atividade: Atividade): Promise<void> {
    await atividadeRepository.editarAtividade(atividade);
  }

  async excluirAtividade(id: string): Promise<void> {
    await atividadeRepository.excluirAtividade(id);
  }
}