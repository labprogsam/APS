import { Atividade } from "../entities/atividade.entity";


export interface IAtividadeRepository {
  getAll(): Atividade[] 
}

export class AtividadeRepository implements IAtividadeRepository {
  getAll(): Atividade[] {
    return [{
      titulo: 'Atividade 1'
    }, {
      titulo: 'Atividade 2'
    }];
  }
}