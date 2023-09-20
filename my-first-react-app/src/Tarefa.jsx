import React from 'react'
import './Tarefa.css'

function Tarefa(props) {
  return (
    <div className="tarefa">
      <p id={props.index}>{props.nomeTarefa}</p>
      <button>Deletar</button>
    </div>
  );
}

export default Tarefa;
