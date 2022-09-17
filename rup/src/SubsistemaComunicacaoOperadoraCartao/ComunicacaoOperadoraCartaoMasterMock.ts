import { uuid } from 'uuidv4';

type cartao = {
  nome: string;
  vencimento: string;
  numero: string;
  cvv: string;
  valor: number;
}

type boleto = {
  cpf: string;
  valor: number;
}

type ResultadoBoleto = {
  validade: string;
  externalId: string;
}

export function pagamentoPorCartaoDeCredito(parametros: cartao): void {
  return;
}

export function pagamentoPorCartaoDeDebito(parametros: cartao) {
  return;
}

export function gerarBoleto(parametros: boleto): ResultadoBoleto {
  return {
    validade: "2022-09-16",
    externalId: uuid()
  }
}