import { AtividadeController } from "../atividade/comunicacao/atividade.controller";
import { Atividade } from "../atividade/negocio";


export class Fachada {
  atividade: AtividadeController;

  constructor() {
    this.atividade = new AtividadeController();
  }
}
