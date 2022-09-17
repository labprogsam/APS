import { Optional } from 'utility-types';
import { PagamentoCartao } from "./pagamento-cartao.entity";
import { PagamentoBoleto } from "./pagamento-boleto.entity";
import { CadastroPagamento } from "./pagamento.cadastro";

type ParametrosPagamentoCartao = {
  id: string;
  nomeNoCartao: string;
  dataDeVencimento: string;
  numeroDoCartao: string;
  tipo: "DEBITO" | "CREDITO";
  cvv: string;
}

type ParametrosPagamentoBoleto = {
  id: string;
  cpf: string;
}

export class ControladorPagamento {
  private cadastroPagamento: CadastroPagamento;

  constructor() {
    this.cadastroPagamento = new CadastroPagamento();
  }
  
  async criarPagamentoCartao(pagamentoCartao: ParametrosPagamentoCartao): Promise<void> {

    // chamar operadora

    await this.cadastroPagamento.criarPagamentoCartao(pagamentoCartao);
  }

  async criarPagamentoBoleto(pagamentoBoleto: ParametrosPagamentoBoleto): Promise<void> {

    // chamar operadora

    await this.cadastroPagamento.criarPagamentoBoleto(pagamentoBoleto);
  }
}
