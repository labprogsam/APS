import { Atividade } from "./atividade.entity";
import { atividadeRepository } from "../dados/atividade.repository";

export class CadastroAtividade {

  constructor() {}
  
  verAtividades(): Atividade[] {
    return atividadeRepository.verAtividades();
  } 
}