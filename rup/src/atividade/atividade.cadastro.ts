import { Atividade } from "./atividade.entity";
import { IAtividadeRepository } from "./atividade.repository.interface";

export class CadastroAtividade {

  private atividadeRepository: IAtividadeRepository;

  constructor(atividadeRepository: IAtividadeRepository) {
    this.atividadeRepository = atividadeRepository;
  }
  
  async verAtividades(): Promise<Atividade[]> {
    const atividades = await this.atividadeRepository.verAtividades();
    return atividades;
  }

  async verAtividadePorId(id: string): Promise<Atividade | null> {
    const atividade = await this.atividadeRepository.verAtividadePorId(id);
    return atividade;
  }

  async criarAtividade(atividade: Atividade): Promise<void> {
    await this.atividadeRepository.criarAtividade(atividade);
  }

  async editarAtividade(atividade: Atividade): Promise<void> {
    await this.atividadeRepository.editarAtividade(atividade);
  }

  async excluirAtividade(id: string): Promise<void> {
    await this.atividadeRepository.excluirAtividade(id);
  }
}