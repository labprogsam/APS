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
}