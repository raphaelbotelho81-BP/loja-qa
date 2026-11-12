const test = require("node:test");
const assert = require("node:assert");
const { calcularTotal, calcularFrete } = require("../src/carrinho");

test("calcula o total do carrinho", () => {
  const itens = [{ preco: 10, quantidade: 2 }, { preco: 5, quantidade: 1 }];
  assert.strictEqual(calcularTotal(itens), 25);
});

test("frete de SP para pacote leve", () => {
  assert.strictEqual(calcularFrete("SP", 0.5, false), 10);
});
