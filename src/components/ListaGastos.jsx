import { formatarReal } from '../utils'

export default function ListaGastos({ gastos, onRemover }) {
  if (gastos.length === 0) {
    return <p className="vazio">Nenhum gasto nesse mês.</p>
  }

  const ordenados = [...gastos].sort((a, b) => b.data.localeCompare(a.data))

  return (
    <ul className="lista">
      {ordenados.map((g) => (
        <li key={g.id}>
          <div>
            <strong>{g.descricao}</strong>
            <small>
              {g.categoria} · {g.data.split('-').reverse().join('/')}
            </small>
          </div>
          <span>{formatarReal(g.valor)}</span>
          <button onClick={() => onRemover(g.id)} title="Remover">
            ×
          </button>
        </li>
      ))}
    </ul>
  )
}
