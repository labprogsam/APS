import { Atividade } from "../negocio/atividade.entity";

export interface IAtividadeRepository {
  verAtividades(): Atividade[] 
}
