import { formatarReal } from '../utils'

export default function Resumo({ gastos }) {
  const total = gastos.reduce((soma, g) => soma + g.valor, 0)

  const porCategoria = {}
  for (const g of gastos) {
    porCategoria[g.categoria] = (porCategoria[g.categoria] || 0) + g.valor
  }
  const linhas = Object.entries(porCategoria).sort((a, b) => b[1] - a[1])

  return (
    <section className="resumo">
      <h2>Total: {formatarReal(total)}</h2>
      {linhas.map(([cat, valor]) => {
        const pct = total ? (valor / total) * 100 : 0
        return (
          <div className="barra" key={cat}>
            <span>{cat}</span>
            <div className="barra-fundo">
              <div className="barra-preenchida" style={{ width: pct + '%' }} />
            </div>
            <span>{formatarReal(valor)}</span>
          </div>
        )
      })}
    </section>
  )
}
