import { Optional } from 'utility-types';
import { Atividade } from "./atividade.entity";
import { CadastroAtividade } from "./atividade.cadastro";

export class ControladorAtividade {
  private cadastroAtividade: CadastroAtividade;

  constructor() {
    this.cadastroAtividade = new CadastroAtividade();
  }
  
  async verAtividades(): Promise<Atividade[]> {
    const atividades = await this.cadastroAtividade.verAtividades();
    return atividades;
  }

  async verAtividadePorId(id: string): Promise<Atividade | null> {
    const atividade = await this.cadastroAtividade.verAtividadePorId(id);
    return atividade;
  }

  async criarAtividade(atividade: Atividade): Promise<void> {
    await this.cadastroAtividade.criarAtividade(atividade);
  }

  async editarAtividade(atividade: Optional<Atividade, 'titulo' | 'recompensa' | 'frequencia' | 'concluida'>): Promise<void> {
    const atividadeJaExiste = await this.cadastroAtividade.verAtividadePorId(atividade.id);
    if (!atividadeJaExiste) {
      return;
    }

    await this.cadastroAtividade.editarAtividade({...atividadeJaExiste, ...atividade});
  }

  async excluirAtividade(id: string): Promise<void> {
    await this.cadastroAtividade.excluirAtividade(id);
  }
}
