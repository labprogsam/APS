import { Atividade } from "../negocio/atividade.entity";
import { IAtividadeRepository } from "./atividade.repository.interface";

export class AtividadeRepository implements IAtividadeRepository {
  private static _instance: IAtividadeRepository;
  private atividades: Atividade[];

  private constructor() {
    this.atividades = [{
      id: '594e1a2d-19a0-40b3-a464-4502d42bb69e',
      titulo: 'titulo',
      concluida: false,
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

  criarAtividade(atividade: Atividade): void {
    this.atividades.push(atividade);
  }

  editarAtividade(atividadeToUpdate: Atividade): void {
    const atividadeAlreadyExists = this.atividades.find((atividade) => atividadeToUpdate.id === atividade.id);
    if(atividadeAlreadyExists) {
      atividadeAlreadyExists.titulo ?? atividadeToUpdate.titulo;
      atividadeAlreadyExists.concluida ?? atividadeToUpdate.concluida;
      atividadeAlreadyExists.recompensa ?? atividadeToUpdate.recompensa;
      atividadeAlreadyExists.frequencia ?? atividadeToUpdate.frequencia;
    }
  }

  excluirAtividade(id: string): void {
    const indexAtividade = this.atividades.findIndex((atividade) => atividade.id === id);
    this.atividades.splice(indexAtividade, 1);
  }

  marcarAtividadeComoConcluida(id: string): void {
    const atividade = this.atividades.find((atividade) => atividade.id === id);
    if(atividade) {
      atividade.concluida = true;
    }
  }
}

export const atividadeRepository = AtividadeRepository.getInstance();