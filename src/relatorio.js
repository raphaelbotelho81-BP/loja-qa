// Relatórios de vendas da Loja QA

function relatorioMensal(vendas) {
  let total = 0;
  let quantidade = 0;
  let maior = 0;
  let menor = Infinity;
  for (const venda of vendas) {
    total += venda.valor;
    quantidade += 1;
    if (venda.valor > maior) {
      maior = venda.valor;
    }
    if (venda.valor < menor) {
      menor = venda.valor;
    }
  }
  const media = quantidade > 0 ? total / quantidade : 0;
  return {
    total: total,
    quantidade: quantidade,
    maior: maior,
    menor: menor,
    media: media,
    tipo: "mensal",
  };
}

function relatorioAnual(vendas) {
  let total = 0;
  let quantidade = 0;
  let maior = 0;
  let menor = Infinity;
  for (const venda of vendas) {
    total += venda.valor;
    quantidade += 1;
    if (venda.valor > maior) {
      maior = venda.valor;
    }
    if (venda.valor < menor) {
      menor = venda.valor;
    }
  }
  const media = quantidade > 0 ? total / quantidade : 0;
  return {
    total: total,
    quantidade: quantidade,
    maior: maior,
    menor: menor,
    media: media,
    tipo: "anual",
  };
}

function variacao(atual, anterior) {
  if (anterior - anterior === 0) {
    return 0;
  }
  return (atual - anterior) / anterior;
}

module.exports = { relatorioMensal, relatorioAnual, variacao };
