import { uuid } from 'uuidv4';

type cartao = {
  nomeNoCartao: string;
  dataDeVencimento: string;
  numero: string;
  cvv: string;
  tipo: string;
  valor: number;
}

type boleto = {
  document: string;
  valor: number;
}

type ResultadoBoleto = {
  validade: string;
  externalId: string;
}

export function pagamentoPorCartao(parametros: cartao): void {
  return;
}

export function gerarBoleto(parametros: boleto): ResultadoBoleto {
  return {
    validade: "2022-09-16",
    externalId: uuid()
  }
}