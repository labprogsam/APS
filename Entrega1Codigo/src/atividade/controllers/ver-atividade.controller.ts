import { Atividade } from '../entities/atividade.entity';
import { IAtividadeRepository } from '../repositories/atividade.repository';

export class VerAtividade {
  constructor(private readonly atividadeRepository: IAtividadeRepository) {}
  handle(): Atividade[] {
    const atividades = this.atividadeRepository.getAll();
    return atividades;
  }  
}