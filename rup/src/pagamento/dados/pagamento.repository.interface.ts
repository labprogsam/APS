import { PagamentoBoleto } from "../negocio/pagamento-boleto.entity";
import { PagamentoCartao } from "../negocio/pagamento-cartao.entity";

export interface IPagamentoRepository {
  criarPagamentoCartao(pagamentoCartao: PagamentoCartao): Promise<void>,
  criarPagamentoBoleto(PagamentoBoleto: PagamentoBoleto): Promise<void>;
}
