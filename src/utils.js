export const CATEGORIAS = ['Mercado', 'Transporte', 'Lazer', 'Contas', 'Saúde', 'Outros']

export function formatarReal(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function mesAtual() {
  return new Date().toISOString().slice(0, 7) // ex: "2024-05"
}
