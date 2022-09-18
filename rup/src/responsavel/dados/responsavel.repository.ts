import { PrismaClient } from '@prisma/client';
import { prismaConnector } from "../../main/prisma/prisma-connector";

import { Responsavel } from "../negocio";
import { IResponsavelRepository } from "./responsavel.repository.interface";

const mockReponsavel: Responsavel = {
  id: "e9ddcaaa-71df-4056-ba97-7999220975f9",
  cpf: "724.075.480-43",
  nome: "Jean Carlos"
}

export class ResponsavelRepository implements IResponsavelRepository {
  private static _instance: IResponsavelRepository;
  private prismaConnection: PrismaClient;

  private constructor() {
    this.prismaConnection = prismaConnector.connect();
  }

  async verResponsavelPorId(): Promise<Responsavel> {
    return mockReponsavel;
  }
  
  async verResponsavelPorCPF(): Promise<Responsavel> {
    return mockReponsavel;
  }

  public static getInstance() {
    return this._instance || (this._instance = new this());
  }
  
}

export const atividadeRepository = ResponsavelRepository.getInstance();
