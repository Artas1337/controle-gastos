import { useMemo, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { mesAtual } from './utils'
import FormGasto from './components/FormGasto'
import ListaGastos from './components/ListaGastos'
import Resumo from './components/Resumo'

export default function App() {
  const [gastos, setGastos] = useLocalStorage('gastos', [])
  const [mes, setMes] = useState(mesAtual())

  const gastosDoMes = useMemo(
    () => gastos.filter((g) => g.data.startsWith(mes)),
    [gastos, mes]
  )

  function adicionar(gasto) {
    setGastos([...gastos, { ...gasto, id: Date.now() }])
  }

  function remover(id) {
    setGastos(gastos.filter((g) => g.id !== id))
  }

  return (
    <main className="container">
      <header>
        <h1>Controle de Gastos</h1>
        <input type="month" value={mes} onChange={(e) => setMes(e.target.value)} />
      </header>

      <FormGasto onAdicionar={adicionar} />
      <Resumo gastos={gastosDoMes} />
      <ListaGastos gastos={gastosDoMes} onRemover={remover} />
    </main>
  )
}
