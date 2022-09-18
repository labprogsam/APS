import { PrismaClient } from '@prisma/client';
import { prismaConnector } from "../../main/prisma/prisma-connector";

import { PagamentoCartao } from "../negocio/pagamento-cartao.entity";
import { PagamentoBoleto } from "../negocio/pagamento-boleto.entity";
import { IPagamentoRepository } from "./pagamento.repository.interface";

export class PagamentoRepository implements IPagamentoRepository {
  private static _instance: IPagamentoRepository;
  private prismaConnection: PrismaClient;

  private constructor() {
    this.prismaConnection = prismaConnector.connect();
  }

  public static getInstance() {
    return this._instance || (this._instance = new this());
  }

  async criarPagamentoCartao(pagamentoCartao: PagamentoCartao): Promise<void> {
    this.prismaConnection.pagamentoCartao.create({
      data: pagamentoCartao,
    });
  }

  async criarPagamentoBoleto(PagamentoBoleto: PagamentoBoleto): Promise<void> {
    this.prismaConnection.pagamentoBoleto.create({
      data: PagamentoBoleto,
    });
  }
}

export const pagamentoRepository = PagamentoRepository.getInstance();