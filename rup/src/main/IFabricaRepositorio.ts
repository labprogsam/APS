import { IAtividadeRepository } from "../atividade";

export interface IFabricaRepositorio {
  criarRepositorioAtividade(): IAtividadeRepository 
}