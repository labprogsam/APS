import { Atividade } from "./atividade.entity";

export interface IAtividadeRepository {
  verAtividades(): Promise<Atividade[]>,
  verAtividadePorId(id: string): Promise<Atividade | null>;
  criarAtividade(atividade: Atividade): Promise<void>;
  editarAtividade(atividade: Atividade): Promise<void>;
  excluirAtividade(id: string): Promise<void>;
}
