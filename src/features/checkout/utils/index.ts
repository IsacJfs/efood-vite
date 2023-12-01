export const getTotalPrice = (items: Menu[]) => {
  // return the total price of the items
  return items.reduce((acumulator, value) => {
    return (acumulator += value.preco)
  }, 0)
}

export const formataPreco = (preco = 0) => {
  // return the formatted price
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
