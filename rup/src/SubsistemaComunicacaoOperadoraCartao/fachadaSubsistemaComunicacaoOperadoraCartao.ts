import { 
  ISubSistemaOperadoraCartao, 
  ParametrosSubSistemaGerarBoleto, 
  ParametrosSubSistemaPagamentoCartao, 
  ResultadoSubSistemaGerarBoleto 
} from "./ISubsistemaComunicacaoOperadoraCartao"
import * as AdapterOperadoraCartaoVisa from "./AdapterOperadoraCartaoVisa";
import * as AdapterOperadoraCartaoMaster from "./AdapterOperadoraCartaoMaster";

export class FachadaSubsistemaOperadoraCartao extends ISubSistemaOperadoraCartao {
  pagarPorCartao(parametros: ParametrosSubSistemaPagamentoCartao): void {
    if (parametros.numeroDoCartao.charAt(0) === "4") {
      AdapterOperadoraCartaoVisa.pagarPorCartao(parametros);
    }else if (parametros.numeroDoCartao.charAt(0) === "5") {
      AdapterOperadoraCartaoMaster.pagarPorCartao(parametros);
    } else {
      throw Error("Error")
    }
  }

  gerarBoleto(parametros: ParametrosSubSistemaGerarBoleto): ResultadoSubSistemaGerarBoleto {
    const boleto = AdapterOperadoraCartaoMaster.gerarBoleto(parametros);
    return boleto;
  }
}
