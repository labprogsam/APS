import React from 'react';

function GerarBoleto() {
  return (
  <form id="gerar-boleto" >
    <h2>Pagar com cartão</h2>
    <label for="cpf">CPF:</label>
    <input type="text" id="cpf" name="cpf" />

    <label for="cliente">Cliente:</label>
    <input type="text" id="cliente" name="cliente" />

    <label for="preco">Preço:</label>
    <input type="text" id="preco" name="preco" />

    <input type="submit" value="Submit" />
  </form>
  );
}

export default GerarBoleto;
