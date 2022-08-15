import { Atividade } from "./atividade.entity";
import { CadastroAtividade } from "./atividade.cadastro";

export class ControladorAtividade {
  private cadastroAtividade: CadastroAtividade;

  constructor() {
    this.cadastroAtividade = new CadastroAtividade();
  }
  
  verAtividades(): Atividade[] {
    return this.cadastroAtividade.verAtividades();
  }

  verAtividadePorId(id: string): Atividade | undefined {
    return this.cadastroAtividade.verAtividadePorId(id);
  }

  criarAtividade({ titulo, recompensa, concluida, frequencia }: Omit<Atividade, 'id'>): void {
    console.log({ titulo, recompensa, concluida, frequencia });
    
    if(!titulo || !recompensa ||  isNaN(+recompensa) || !frequencia ||  isNaN(+frequencia) || !concluida) {
      throw Error('Dados Incompletos')
    }

    return this.cadastroAtividade.criarAtividade({ 
      id: this.makeId(8),
      titulo,
      recompensa: +recompensa,
      frequencia: +frequencia,
      concluida,
    });
  }

  editarAtividade(atividade: Atividade): void {
    return this.cadastroAtividade.editarAtividade(atividade);
  }

  excluirAtividade(id: string): void {
    return this.cadastroAtividade.excluirAtividade(id);
  }

  marcarAtividadeComoConcluida(id: string): void {
    return this.cadastroAtividade.marcarAtividadeComoConcluida(id);
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