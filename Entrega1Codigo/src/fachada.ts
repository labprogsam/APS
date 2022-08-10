import { VerAtividade } from "./atividade/controllers/ver-atividade.controller";
import { Atividade } from "./atividade/entities/atividade.entity";
import { verAtividadeFactory } from "./atividade/factories/ver-atividade.factory";


export class Fachada {
  private verAtividadeController: VerAtividade;

  constructor() {
    this.verAtividadeController = verAtividadeFactory;
  }

  getAllAtividades(): Atividade[] {
    return this.verAtividadeController.handle();
  }
} 