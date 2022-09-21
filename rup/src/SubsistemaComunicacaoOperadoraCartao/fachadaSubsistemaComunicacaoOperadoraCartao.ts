import { 
  ISubSistemaOperadoraCartao, 
  ParametrosSubSistemaGerarBoleto, 
  ParametrosSubSistemaPagamentoCartao, 
  ResultadoSubSistemaGerarBoleto 
} from "./ISubsistemaComunicacaoOperadoraCartao"
import { AdapterOperadoraCartao } from "./AdapterOperadoraCartao";

export class FachadaSubsistemaOperadoraCartao extends ISubSistemaOperadoraCartao {

  private adapterOperadoraCartao: AdapterOperadoraCartao;

  constructor() {
    super()
    this.adapterOperadoraCartao = new AdapterOperadoraCartao();
  }

  pagarPorCartao(parametros: ParametrosSubSistemaPagamentoCartao): void {
    this.adapterOperadoraCartao.pagarPorCartao(parametros);
  }

  gerarBoleto(parametros: ParametrosSubSistemaGerarBoleto): ResultadoSubSistemaGerarBoleto {
    const boleto = this.adapterOperadoraCartao.gerarBoleto(parametros);
    return boleto;
  }
}
