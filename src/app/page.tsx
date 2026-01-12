'use client'

import { Task } from "@/types/Task";
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  // Atualiza "tasks" com o que está no localStorage;
  // Este useEffect() é acionado uma vez a cada re-renderização;
  // A cada chamada de setTasks (em qualquer lugar) ==>  a re-renderização desta página é acionada;
  // Ou seja, a cada re-renderição desta página ==> "tasks" será igual a localStorage;
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
      <h1>Gerenciados de Tarefas</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
