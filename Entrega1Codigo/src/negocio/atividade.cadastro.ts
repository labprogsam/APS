import { Atividade } from "./atividade.entity";
import { atividadeRepository } from "../dados/atividade.repository";

export class CadastroAtividade {

  constructor() {}
  
  verAtividades(): Atividade[] {
    return atividadeRepository.verAtividades();
  }

  criarAtividade(atividade: Atividade): void {
    return atividadeRepository.criarAtividade(atividade);
  }

  editarAtividade(atividade: Atividade): void {
    return atividadeRepository.editarAtividade(atividade);
  }

  excluirAtividade(id: string): void {
    return atividadeRepository.excluirAtividade(id);
  }

  marcarAtividadeComoConcluida(id: string): void {
    return atividadeRepository.marcarAtividadeComoConcluida(id);
  }
}