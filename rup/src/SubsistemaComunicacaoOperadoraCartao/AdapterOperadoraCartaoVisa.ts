
import {
  ParametrosSubSistemaGerarBoleto, 
  ParametrosSubSistemaPagamentoCartao, 
  ResultadoSubSistemaGerarBoleto 
} from "./ISubsistemaComunicacaoOperadoraCartao"
import * as OperadoraCartaoVisa from "./ComunicacaoOperadoraCartaoVisaMock";

export function pagarPorCartao(parametros: ParametrosSubSistemaPagamentoCartao): void {
  OperadoraCartaoVisa.pagamentoPorCartao({
    nomeNoCartao: parametros.nomeNoCartao,
    dataDeVencimento: parametros.dataDeVencimento,
    numero: parametros.numeroDoCartao,
    cvv: parametros.cvv,
    tipo: parametros.tipo,
    valor: parametros.valor,
  })
}

export function gerarBoleto(parametros: ParametrosSubSistemaGerarBoleto): ResultadoSubSistemaGerarBoleto {
  const boletoGerado = OperadoraCartaoVisa.gerarBoleto({
    document: parametros.cpf,
    valor: parametros.valor
  })

  return {
    validade: boletoGerado.validade,
    externalId: boletoGerado.externalId
  }
}
