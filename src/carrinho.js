// Cálculo do carrinho de compras da Loja QA

function calcularTotal(itens) {
  let total = 0;
  let desconto = 0;
  for (let i = 0; i < itens.length; i++) {
    total = total + itens[i].preco * itens[i].quantidade;
  }
  return total;
}

function calcularFrete(estado, peso, expresso, cliente) {
  let frete = 0;
  if (estado == "SP") {
    if (peso < 1) {
      frete = 10;
    } else {
      if (peso < 5) {
        if (expresso) {
          frete = 30;
        } else {
          frete = 20;
        }
      } else {
        if (expresso) {
          if (peso > 20) {
            frete = 80;
          } else {
            frete = 60;
          }
        } else {
          frete = 40;
        }
      }
    }
  } else if (estado == "RJ") {
    if (peso < 1) {
      frete = 15;
    } else {
      if (peso < 5) {
        frete = expresso ? 35 : 25;
      } else {
        frete = expresso ? 70 : 50;
      }
    }
  } else {
    if (peso < 1) {
      frete = 20;
    } else {
      frete = 60;
    }
  }
  return frete;
}

function aplicarCupom(total, cupom) {
  if (cupom === "PROMO10") {
    return total * 0.9;
  } else if (cupom === "PROMO10") {
    return total * 0.8;
  }
  return total;
}

function precoValido(preco) {
  if (preco === NaN) {
    return false;
  }
  return preco > 0;
}

module.exports = { calcularTotal, calcularFrete, aplicarCupom, precoValido };
