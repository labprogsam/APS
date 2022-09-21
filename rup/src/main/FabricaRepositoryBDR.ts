import { IAtividadeRepository, AtividadeRepository } from "../atividade";
import { IFabricaRepositorio } from "./IFabricaRepositorio";

export class FabricaRepositoryBDR implements IFabricaRepositorio {
  criarRepositorioAtividade(): IAtividadeRepository {
    return AtividadeRepository.getInstance();
  }
}
