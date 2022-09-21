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

    const { cpf, responsavelId } = request.body;

    if(!cpf || !responsavelId) {
      response.status(400).json({
        error: "Dados incorretos."
      });
    }

    await this.controladorPagamento.criarPagamentoBoleto({ 
      id: uuid(),
      cpf,
      responsavelId
    });

    response.status(201).json()
  }

  efetuarPagamentoCartao = async (request: Request, response: Response) => {

    const { nomeNoCartao, dataDeVencimento, tipo, numeroDoCartao, cvv, responsavelId } = request.body;

    if(!nomeNoCartao || !dataDeVencimento || !numeroDoCartao || !cvv || !tipo || !responsavelId) {
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
      cvv,
      responsavelId
    });

    response.status(201).json()
  }
}