import { ControladorAtividade } from "./atividade.controlador";
import { Atividade } from "./atividade.entity";


export class Fachada {
  private verAtividadeControlador: ControladorAtividade;

  constructor() {
    this.verAtividadeControlador = new ControladorAtividade();
  }

  verAtividades(): Atividade[] {
    return this.verAtividadeControlador.verAtividades();
  }

  criarAtividade(atividade: Atividade): void {
    return this.verAtividadeControlador.criarAtividade(atividade);
  }

  editarAtividade(atividade: Atividade): void {
    return this.verAtividadeControlador.editarAtividade(atividade);
  }

  excluirAtividade(id: string): void {
    return this.verAtividadeControlador.excluirAtividade(id);
  }

  marcarAtividadeComoConcluida(id: string): void {
    return this.verAtividadeControlador.marcarAtividadeComoConcluida(id);
  }
}
