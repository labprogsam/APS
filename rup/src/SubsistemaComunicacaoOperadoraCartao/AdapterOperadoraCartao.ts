
import {
  ParametrosSubSistemaGerarBoleto, 
  ParametrosSubSistemaPagamentoCartao, 
  ResultadoSubSistemaGerarBoleto 
} from "./ISubsistemaComunicacaoOperadoraCartao";
import { IAdapterOperadoraCartao } from "./IAdapterOperadoraCartao";
import { AdapterOperadoraCartaoMaster } from "./AdapterOperadoraCartaoMaster";
import { AdapterOperadoraCartaoVisa } from "./AdapterOperadoraCartaoVisa";

export class AdapterOperadoraCartao implements IAdapterOperadoraCartao {

  private adapterOperadoraCartaoMaster: AdapterOperadoraCartaoMaster;
  private adapterOperadoraCartaoVisa: AdapterOperadoraCartaoVisa;

  constructor() {
    this.adapterOperadoraCartaoMaster = new AdapterOperadoraCartaoMaster();
    this.adapterOperadoraCartaoVisa = new AdapterOperadoraCartaoVisa();
  }

  pagarPorCartao(parametros: ParametrosSubSistemaPagamentoCartao): void {
    if (parametros.numeroDoCartao.charAt(0) === "4") {
      this.adapterOperadoraCartaoVisa.pagarPorCartao(parametros);
    }else if (parametros.numeroDoCartao.charAt(0) === "5") {
      this.adapterOperadoraCartaoMaster.pagarPorCartao(parametros);
    } else {
      throw Error("Error")
    }
  }
  gerarBoleto(parametros: ParametrosSubSistemaGerarBoleto): ResultadoSubSistemaGerarBoleto {
    const boletoGerado = this.adapterOperadoraCartaoMaster.gerarBoleto({
      cpf: parametros.cpf,
      valor: parametros.valor
    })

    return {
      validade: boletoGerado.validade,
      externalId: boletoGerado.externalId
    }
  }
}

