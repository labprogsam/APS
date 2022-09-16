import { Request, Response } from "express";
import { uuid } from 'uuidv4';
import { Optional } from 'utility-types';
import { ControladorAtividade, Atividade } from "../negocio";


export class AtividadeController {
  controladorAtividade: ControladorAtividade;

  constructor() {
    this.controladorAtividade = new ControladorAtividade();
  }
  
  verAtividades = async (request: Request, response: Response) => {
    const atividades = await this.controladorAtividade.verAtividades();
    response.status(200).json(atividades);
  }

   verAtividadePorId = async (request: Request, response: Response) => {
    const { id } = request.params;

    const atividade = await this.controladorAtividade.verAtividadePorId(id);

    if(atividade) response.status(200).json({}); 

    response.status(200).json(atividade);
  }

  criarAtividade = async (request: Request, response: Response) => {

    const { titulo, recompensa, frequencia, concluida } = request.body;

    if(!titulo || !recompensa ||  isNaN(recompensa) || !frequencia ||  isNaN(frequencia)) {
      response.status(400).json({
        error: "Dados incorretos."
      });
    }

    await this.controladorAtividade.criarAtividade({ 
      id: uuid(),
      titulo,
      recompensa,
      frequencia,
      concluida: concluida ?? false,
    });

    response.status(201).json()
  }

  editarAtividade = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { titulo, recompensa, frequencia, concluida } = request.body;

    if((recompensa &&  isNaN(recompensa)) || (frequencia &&  isNaN(frequencia))) {
      response.status(400).json({
        error: "Dados incorretos."
      });
    }

    const atividade: Optional<Atividade, 'titulo' | 'recompensa' | 'frequencia' | 'concluida'> = {
      id,
      titulo,
      recompensa,
      frequencia,
      concluida
    }

    await this.controladorAtividade.editarAtividade(atividade);

    response.status(200).json()
  }

  excluirAtividade = async (request: Request, response: Response) => {
    const { id } = request.params;

    await this.controladorAtividade.excluirAtividade(id);
    response.status(204).json();
  }
}