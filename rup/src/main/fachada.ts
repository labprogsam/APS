import { Optional } from 'utility-types';
import { Atividade, ControladorAtividade } from "../atividade";
import { IFabricaRepositorio } from "./IFabricaRepositorio";
import { FabricaRepositoryBDR } from "./FabricaRepositoryBDR";

export class Fachada {
  private controladorAtividade: ControladorAtividade;
  private fabricaRepositorio: IFabricaRepositorio;

  constructor() {
    this.fabricaRepositorio = new FabricaRepositoryBDR();
    this.controladorAtividade = new ControladorAtividade(this.fabricaRepositorio.criarRepositorioAtividade());
  }

  async verAtividades(): Promise<Atividade[]> {
    const atividades = await this.controladorAtividade.verAtividades();
    return atividades;
  }
  async verAtividadePorId(id: string): Promise<Atividade | null> {
    const atividade = await this.controladorAtividade.verAtividadePorId(id);
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
