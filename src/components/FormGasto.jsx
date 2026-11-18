import { useState } from 'react'
import { CATEGORIAS } from '../utils'

const hoje = () => new Date().toISOString().slice(0, 10)

export default function FormGasto({ onAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState(CATEGORIAS[0])
  const [data, setData] = useState(hoje())
  const [erro, setErro] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const numero = Number(valor.replace(',', '.'))

    if (!descricao.trim()) return setErro('Coloca uma descrição')
    if (!numero || numero <= 0) return setErro('Valor inválido')

    onAdicionar({ descricao: descricao.trim(), valor: numero, categoria, data })
    setDescricao('')
    setValor('')
    setErro('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <input
        placeholder="Valor"
        inputMode="decimal"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        {CATEGORIAS.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
      <button type="submit">Adicionar</button>
      {erro && <p className="erro">{erro}</p>}
    </form>
  )
}
