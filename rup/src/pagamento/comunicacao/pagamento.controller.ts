import { Request, Response } from "express";
import { uuid } from 'uuidv4';
import { Optional } from 'utility-types';
import { ControladorPagamento, PagamentoBoleto, PagamentoCartao } from "../negocio";


export class AtividadeController {
  controladorPagamento: ControladorPagamento;

  constructor() {
    this.controladorPagamento = new ControladorPagamento();
  }
  
  gerarBoleto = async (request: Request, response: Response) => {

    const { cpf } = request.body;

    if(!cpf) {
      response.status(400).json({
        error: "Dados incorretos."
      });
    }

    await this.controladorPagamento.criarPagamentoBoleto({ 
      id: uuid(),
      cpf
    });

    response.status(201).json()
  }

  efetuarPagamentoCartao = async (request: Request, response: Response) => {

    const { nomeNoCartao, dataDeVencimento, tipo, numeroDoCartao, cvv } = request.body;

    if(!nomeNoCartao || !dataDeVencimento || !numeroDoCartao || !cvv || !tipo) {
      response.status(400).json({
        error: "Dados incorretos."
      });
    }

    await this.controladorPagamento.criarPagamentoCartao({ 
      id: uuid(),
      nomeNoCartao, 
      dataDeVencimento, 
      tipo,
      numeroDoCartao, 
      cvv
    });

    response.status(201).json()
  }
}