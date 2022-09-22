import React from 'react';

function PagamentoCartao() {
  return (
    <form id="pagar-cartao" >
      <h2>Pagar com cartão</h2>
      <label for="nome">Nome cartão:</label>
      <input type="text" id="nome" name="nome" />

      <label for="vencimento">Data de Vencimento:</label>
      <input type="text" id="vencimento" name="vencimento" />

      <label for="numero">Número do cartão:</label>
      <input type="text" id="numero" name="numero" />

      <label for="cvv">CVV:</label>
      <input type="text" id="cvv" name="cvv" />

      <label for="preco">Preço:</label>
      <input type="text" id="preco" name="preco" />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default PagamentoCartao;
