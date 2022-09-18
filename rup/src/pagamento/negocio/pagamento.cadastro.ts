import { PagamentoBoleto } from "./pagamento-boleto.entity";
import { PagamentoCartao } from "./pagamento-cartao.entity";
import { pagamentoRepository } from "../dados";

export class CadastroPagamento {

  constructor() {}
  
  async criarPagamentoCartao(pagamentoCartao: PagamentoCartao): Promise<void> {
    await pagamentoRepository.criarPagamentoCartao(pagamentoCartao);
  }

  async criarPagamentoBoleto(pagamentoBoleto: PagamentoBoleto): Promise<void> {
    await pagamentoRepository.criarPagamentoBoleto(pagamentoBoleto);
  }
}