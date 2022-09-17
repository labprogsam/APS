import { Optional } from 'utility-types';
import moment from "moment";
import { PagamentoCartao } from "./pagamento-cartao.entity";
import { PagamentoBoleto } from "./pagamento-boleto.entity";
import { CadastroPagamento } from "./pagamento.cadastro";
import { 
  ISubSistemaOperadoraCartao,
  FachadaSubsistemaOperadoraCartao 
} from "../../SubsistemaComunicacaoOperadoraCartao";

type ParametrosPagamentoCartao = {
  id: string;
  nomeNoCartao: string;
  dataDeVencimento: string;
  numeroDoCartao: string;
  tipo: "DEBITO" | "CREDITO";
  cvv: string;
  responsavelId: string;
}

type ParametrosPagamentoBoleto = {
  id: string;
  cpf: string;
  responsavelId: string;
}

export class ControladorPagamento {
  private cadastroPagamento: CadastroPagamento;
  private subsistemaOperadoraCartao: ISubSistemaOperadoraCartao;
  private SUBSCRIPTIONPLAN = 15;

  constructor() {
    this.cadastroPagamento = new CadastroPagamento();
    this.subsistemaOperadoraCartao = new FachadaSubsistemaOperadoraCartao();
  }
  
  async criarPagamentoCartao(pagamentoCartao: ParametrosPagamentoCartao): Promise<void> {

    this.subsistemaOperadoraCartao.pagarPorCartao({
      nomeNoCartao: pagamentoCartao.nomeNoCartao,
      dataDeVencimento: pagamentoCartao.dataDeVencimento,
      numeroDoCartao: pagamentoCartao.numeroDoCartao,
      cvv: pagamentoCartao.cvv,
      tipo: pagamentoCartao.tipo,
      valor: this.SUBSCRIPTIONPLAN
    });

    await this.cadastroPagamento.criarPagamentoCartao({
      id: pagamentoCartao.id,
      data: moment().format("DD-MM-YYYY"),
      hora: moment().format("h:mm"),
      responsavelId: pagamentoCartao.responsavelId,
      valor: this.SUBSCRIPTIONPLAN,
    });
  }

  async criarPagamentoBoleto(pagamentoBoleto: ParametrosPagamentoBoleto): Promise<void> {

    const boleto = this.subsistemaOperadoraCartao.gerarBoleto({
      cpf: pagamentoBoleto.cpf,
      valor: this.SUBSCRIPTIONPLAN
    });

    await this.cadastroPagamento.criarPagamentoBoleto({
      id: pagamentoBoleto.id,
      boletoExternalId: boleto.externalId,
      responsavelId: pagamentoBoleto.responsavelId
    });
  }
}
