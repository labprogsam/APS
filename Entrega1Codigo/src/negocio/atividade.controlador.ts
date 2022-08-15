import { Atividade } from "./atividade.entity";
import { CadastroAtividade } from "./atividade.cadastro";

export class ControladorAtividade {
  private cadastroAtividade: CadastroAtividade;

  constructor() {
    this.cadastroAtividade = new CadastroAtividade();
  }
  
  verAtividades(): Atividade[] {
    return this.cadastroAtividade.verAtividades();
  }

  criarAtividade(atividade: Atividade): void {
    return this.cadastroAtividade.criarAtividade(atividade);
  }

  editarAtividade(atividade: Atividade): void {
    return this.cadastroAtividade.editarAtividade(atividade);
  }

  excluirAtividade(id: string): void {
    return this.cadastroAtividade.excluirAtividade(id);
  }

  marcarAtividadeComoConcluida(id: string): void {
    return this.cadastroAtividade.marcarAtividadeComoConcluida(id);
  }
}