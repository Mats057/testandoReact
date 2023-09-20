import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const listaTarefas = localStorage.getItem("listaTarefas");
  const [lista, setLista] = useState(listaTarefas ? JSON.parse(listaTarefas) : []);
  const [novoItem, setNovoItem] = useState("");


  useEffect(() => {
    localStorage.setItem("listaTarefas" , JSON.stringify(lista));
    }, [lista]);


  function criarTarefa() {
    if (novoItem === "") {
      alert("Digite o nome da tarefa");
      return;
    }
    setLista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById("nomeTarefa").focus();
  }

  function deletar(index) {
    return () => {
      const novaLista = [...lista];
      novaLista.splice(index, 1);
      setLista(novaLista);
    };
  }

  function deleteAll() {
    return () => {
      setLista([]);
    };
  }

  function selecionada(index){
    return () => {
      const novaLista = [...lista];
      novaLista[index].isCompleted = !novaLista[index].isCompleted;
      setLista(novaLista);
    };
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <div className="addTarefa" id="container">
        <input
          type="text"
          id="nomeTarefa"
          name="nomeTarefa"
          value={novoItem}
          onChange={(e) => {
            setNovoItem(e.target.value);
          }}
        />
        <button onClick={() => criarTarefa()}>Adicionar Tarefa</button>
      </div>
      <div className="listaTarefas">
        {lista.length < 1 ? (
          <p>Nenhuma tarefa cadastrada</p>
        ) : (
          lista.map((item, index) => (
            <div className={item.isCompleted ? "tarefa complete" : "tarefa"}>
              <p id={index} onClick={selecionada(index)}>{item.text}</p>
              <button onClick={deletar(index)}>Deletar</button>
            </div>
          ))
        )
        }
      </div>
      <div>
        {lista.length > 0 ? (
          <button id="delAll" onClick={deleteAll()}>Deletar todas as tarefas</button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
