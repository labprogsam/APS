import { ControladorAtividade } from "./atividade.controlador";
import { Atividade } from "./atividade.entity";


export class Fachada {
  private verAtividadeControlador: ControladorAtividade;

  constructor() {
    this.verAtividadeControlador = new ControladorAtividade();
  }

  verAtividadesAtividades(): Atividade[] {
    return this.verAtividadeControlador.verAtividades();
  }
}
