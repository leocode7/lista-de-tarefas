'use client'

import { Task } from "@/types/Task"
import { useState } from "react"

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskForm = ({setTasks}: Props) => {
  const [title, setTitle] = useState('');

  const addTask = () => {
    // Ao ser submetido, se o input estiver vazio ou apenas com espaços ==> retorna sem fazer nada
    if (!title.trim) return

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

    // Boa prática: Usar callback (prev => ...prev) ==> quando o novo estado (do array ou do objeto) depende do anterior 
    setTasks(prev => [...prev, newTask]);
    setTitle('');
  }

  return (
    <div>
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
    </div>
  )
}

export default TaskForm;