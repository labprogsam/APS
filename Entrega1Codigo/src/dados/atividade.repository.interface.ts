import { Atividade } from "../negocio/atividade.entity";

export interface IAtividadeRepository {
  verAtividades(): Atividade[],
  criarAtividade(atividade: Atividade): void;
  editarAtividade(atividade: Atividade): void;
  excluirAtividade(id: string): void;
  marcarAtividadeComoConcluida(id: string): void;
}
