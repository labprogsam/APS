import { PrismaClient } from '@prisma/client';
import { prismaConnector } from "../../main/prisma/prisma-connector";

import { Atividade } from "../negocio/atividade.entity";
import { IAtividadeRepository } from "./atividade.repository.interface";

export class AtividadeRepository implements IAtividadeRepository {
  private static _instance: IAtividadeRepository;
  private prismaConnection: PrismaClient;

  private constructor() {
    this.prismaConnection = prismaConnector.connect();
  }

  public static getInstance() {
    return this._instance || (this._instance = new this());
  }
  
  async verAtividades(): Promise<Atividade[]> {
    const atividades = await this.prismaConnection.atividade.findMany();
    return atividades;
  }

  async criarAtividade(atividade: Atividade): Promise<void> {
    await this.prismaConnection.atividade.create({
      data: atividade
    });
  }

  async verAtividadePorId(id: string): Promise<Atividade | null> {
    const atividade = this.prismaConnection.atividade.findFirst({
      where: {
        id
      }
    });

    return atividade;
  }

  async editarAtividade(atividade: Atividade): Promise<void> {
    const {id, ...restOfParams} = atividade;
    
    await this.prismaConnection.atividade.update({
      where: { id },
      data: restOfParams
    })
  }

  async excluirAtividade(id: string): Promise<void> {
    this.prismaConnection.atividade.delete({
      where: {
        id  
      }
    }) 
  }
}

export const atividadeRepository = AtividadeRepository.getInstance();