import { VerAtividade } from "../controllers/ver-atividade.controller";
import { AtividadeRepository } from "../repositories/atividade.repository";

const atividadeRepository = new AtividadeRepository();
export const verAtividadeFactory = new VerAtividade(atividadeRepository);
