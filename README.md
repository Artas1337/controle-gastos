# Controle de Gastos

Tô estudando React e fiz esse app pra praticar o básico: componentes, estado, props e hooks.

Você cadastra seus gastos, escolhe o mês e vê quanto gastou no total e em cada categoria.
Os dados ficam salvos no `localStorage`, então não tem back-end.

## O que pratiquei

- `useState` e `useMemo`
- criar um hook próprio (`useLocalStorage`)
- passar função por props (o form avisa o App quando tem gasto novo)
- renderizar lista e renderização condicional
- formulário controlado com uma validação simples

## Rodando

```
npm install
npm run dev
```

## Ideias pra depois

- [ ] editar um gasto já cadastrado
- [ ] exportar pra CSV
- [ ] gráfico de verdade (talvez com Recharts)
- [ ] separar entradas e saídas
