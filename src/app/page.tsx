'use client'

import { Task } from "@/types/Task";
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  // Este useEffect() é acionado uma única vez para montar "tasks" com o que está no localStorage.
  // A partir da montagem, "tasks/setTasks" gerencia as manipulações de estado
  // A cada chamada de setTasks (em qualquer lugar) ==>  a re-renderização desta página é acionada, mas este useEffect não roda novamente;
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  // "tasks" muda ==> localStorage é atualizado
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div>
      <h1>GERENCIADOR DE TAREFAS</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
