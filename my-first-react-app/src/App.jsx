import React from 'react'
import { useState } from 'react'
import './App.css'
import Tarefa from './Tarefa'


function App() {
  const [lista, setLista] = useState([])
  const [novoItem, setNovoItem] = useState('')
  function criarTarefa(){
    if(novoItem === ''){
      alert('Digite o nome da tarefa')
      return
    }
    setLista([...lista, {text: novoItem, isCompleted: false}])
    setNovoItem('')
    document.getElementById('nomeTarefa').focus()
    
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <div className="addTarefa" id="container">
        <input type="text" id='nomeTarefa' name="nomeTarefa" value={novoItem} onChange={(e) => {setNovoItem(e.target.value)}}/>
        <button onClick={() => criarTarefa()}>
          Adicionar Tarefa
        </button>
      </div>
      <div className="listaTarefas">
        {
         lista.length < 1 ?
          <p>Nenhuma tarefa cadastrada</p>
          :
          lista.map((item, index) => (
            <Tarefa key={index} nomeTarefa={item.text} />
          ))
        }
      </div>
    </>
  )
}

export default App
