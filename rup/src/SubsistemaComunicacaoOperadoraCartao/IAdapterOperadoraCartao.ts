import { 
  ParametrosSubSistemaPagamentoCartao,
  ParametrosSubSistemaGerarBoleto,
  ResultadoSubSistemaGerarBoleto, 
} from "./ISubsistemaComunicacaoOperadoraCartao";

export interface IAdapterOperadoraCartao {
  pagarPorCartao(parametros: ParametrosSubSistemaPagamentoCartao): void,
  gerarBoleto(parametros: ParametrosSubSistemaGerarBoleto): ResultadoSubSistemaGerarBoleto,
}