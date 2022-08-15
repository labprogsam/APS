import { Atividade } from "../negocio/atividade.entity";
import { IAtividadeRepository } from "./atividade.repository.interface";

export class AtividadeRepository implements IAtividadeRepository {
  private static _instance: IAtividadeRepository;
  private atividades: Atividade[];

  private constructor() {
    this.atividades = [{
      titulo: 'titulo',
      frequencia: 2,
      recompensa: 20
    }];
  }

  public static getInstance() {
    return this._instance || (this._instance = new this());
  }

  verAtividades(): Atividade[] {
    return this.atividades;
  }


}

export const atividadeRepository = AtividadeRepository.getInstance();