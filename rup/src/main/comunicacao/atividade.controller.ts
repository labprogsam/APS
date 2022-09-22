import { uuid } from 'uuidv4';
import { Optional } from 'utility-types';
import { Request, Response } from "express";
import { Fachada } from "../fachada";
import { Atividade } from "../../atividade";


export class AtividadeController {
  fachada: Fachada;

  constructor() {
    this.fachada = new Fachada();
  }
  
  verAtividades = async (request: Request, response: Response) => {
    const atividades = await this.fachada.verAtividades();
    response.status(200).json(atividades);
  }

   verAtividadePorId = async (request: Request, response: Response) => {
    const { id } = request.params;

    const atividade = await this.fachada.verAtividadePorId(id);

    if(!atividade) response.status(200).json(); 

    response.status(200).json(atividade);
  }

  criarAtividade = async (request: Request, response: Response) => {

    const { titulo, recompensa, frequencia, concluida } = request.body;

    if(!titulo || !recompensa ||  isNaN(recompensa) || !frequencia ||  isNaN(frequencia)) {
      response.status(400).json({
        error: "Dados incorretos."
      });
    }

    await this.fachada.criarAtividade({ 
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

    await this.fachada.editarAtividade(atividade);

    response.status(200).json()
  }

  excluirAtividade = async (request: Request, response: Response) => {
    const { id } = request.params;

    await this.fachada.excluirAtividade(id);
    response.status(204).json();
  }
}