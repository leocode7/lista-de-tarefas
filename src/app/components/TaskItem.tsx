'use client'

import { Task } from "@/types/Task"

type Props = {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskItem = ({ task, setTasks }: Props) => {
  const toggleComplete = () => {
    setTasks(prev => prev.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
  }

  const removeTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  }

  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={toggleComplete}
      />

      <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
        {task.title}
      </span>

      <button onClick={removeTask}>Remover</button>
    </li>
  )
}

export default TaskItem;
