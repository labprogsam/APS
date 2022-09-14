import { Request, Response } from "express";
import { Atividade } from "../negocio/atividade.entity";
import { ControladorAtividade } from "../negocio/atividade.controlador";

export class AtividadeController {
  private controladorAtividade: ControladorAtividade;

  constructor() {
    this.controladorAtividade = new ControladorAtividade();
  }
  
  async verAtividades(request: Request, response: Response) {
    const atividades = await this.controladorAtividade.verAtividades();
    response.json(atividades);
  }

  verAtividadePorId(id: string): Atividade | undefined {
    return this.controladorAtividade.verAtividadePorId(id);
  }

  criarAtividade({ titulo, recompensa, concluida, frequencia }: Omit<Atividade, 'id'>): void {
    if(!titulo || !recompensa ||  isNaN(+recompensa) || !frequencia ||  isNaN(+frequencia) || !concluida) {
      throw Error('Dados Incompletos')
    }

    return this.controladorAtividade.criarAtividade({ 
      id: this.makeId(8),
      titulo,
      recompensa: +recompensa,
      frequencia: +frequencia,
      concluida,
    });
  }

  editarAtividade(atividade: Atividade): void {
    return this.controladorAtividade.editarAtividade(atividade);
  }

  excluirAtividade(id: string): void {
    return this.controladorAtividade.excluirAtividade(id);
  }

  marcarAtividadeComoConcluida(id: string): void {
    return this.controladorAtividade.marcarAtividadeComoConcluida(id);
  }

  private makeId(length: number) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result;
  }
}