import { useState } from 'react'
import './App.css'
import Tarefa from './Tarefa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <div className="addTarefa">
        <input type="text" />
        <button onClick={() => setCount((count) => count * 2 + 1)}>
          Adicionar Tarefa
        </button>
      </div>
      <Tarefa />
    </>
  )
}

export default App
