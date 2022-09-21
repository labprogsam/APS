import { Optional } from 'utility-types';
import { Atividade, ControladorAtividade } from "../atividade";

export class Fachada {
  private controladorAtividade: ControladorAtividade;

  constructor() {
    this.controladorAtividade = new ControladorAtividade();
  }

  async verAtividades(): Promise<Atividade[]> {
    const atividades = await this.controladorAtividade.verAtividades();
    return atividades;
  }
  async verAtividadePorId(id: string): Promise<Atividade | null> {
    const atividade = await this.verAtividadePorId(id);
    return atividade;
  }
  async criarAtividade(atividade: Atividade): Promise<void> {
    await this.controladorAtividade.criarAtividade(atividade);
  }
  async editarAtividade(atividade: Optional<Atividade, 'titulo' | 'recompensa' | 'frequencia' | 'concluida'>): Promise<void> {
    await this.controladorAtividade.editarAtividade(atividade);
  }
  async excluirAtividade(id: string): Promise<void> {
    await this.controladorAtividade.excluirAtividade(id);
  }
}
