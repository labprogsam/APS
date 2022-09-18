
import {
  ParametrosSubSistemaGerarBoleto, 
  ParametrosSubSistemaPagamentoCartao, 
  ResultadoSubSistemaGerarBoleto 
} from "./ISubsistemaComunicacaoOperadoraCartao"
import * as OperadoraCartaoMaster from "./ComunicacaoOperadoraCartaoMasterMock";

export function pagarPorCartao(parametros: ParametrosSubSistemaPagamentoCartao): void {
  if (parametros.tipo === "DEBITO") {
    OperadoraCartaoMaster.pagamentoPorCartaoDeDebito({
      nome: parametros.nomeNoCartao,
      vencimento: parametros.dataDeVencimento,
      numero: parametros.numeroDoCartao,
      cvv: parametros.cvv,
      valor: parametros.valor,
    })
  } else if (parametros.tipo === "CREDITO") {
    OperadoraCartaoMaster.pagamentoPorCartaoDeCredito({
      nome: parametros.nomeNoCartao,
      vencimento: parametros.dataDeVencimento,
      numero: parametros.numeroDoCartao,
      cvv: parametros.cvv,
      valor: parametros.valor,
    })
  }
}

export function gerarBoleto(parametros: ParametrosSubSistemaGerarBoleto): ResultadoSubSistemaGerarBoleto {
  const boletoGerado = OperadoraCartaoMaster.gerarBoleto({
    cpf: parametros.cpf,
    valor: parametros.valor
  })

  return {
    validade: boletoGerado.validade,
    externalId: boletoGerado.externalId
  }
}
