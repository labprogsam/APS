export type ParametrosSubSistemaPagamentoCartao = {
  nomeNoCartao: string;
  dataDeVencimento: string;
  numeroDoCartao: string;
  cvv: string;
  tipo: string;
  valor: number;
}

export type ParametrosSubSistemaGerarBoleto = {
  cpf: string;
  valor: number;
}

export type ResultadoSubSistemaGerarBoleto = {
  validade: string;
  externalId: string;
}

export abstract class ISubSistemaOperadoraCartao {
  abstract pagarPorCartao(parametros: ParametrosSubSistemaPagamentoCartao): void
  abstract gerarBoleto(parametros: ParametrosSubSistemaGerarBoleto): ResultadoSubSistemaGerarBoleto;
}
