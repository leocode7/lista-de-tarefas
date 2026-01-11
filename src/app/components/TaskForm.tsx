'use client'

import { Task } from "@/types/Task"
import { useState } from "react"

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskForm = ({setTasks}: Props) => {
  const [title, setTitle] = useState('');

  const addTask = () => {
    // Se estiver vazio ou apenas espaços retornar sem fazer nada
    if (!title.trim) return

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }

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