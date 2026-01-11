'use client'

import { Task } from "@/types/Task"
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({tasks, setTasks}: Props) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
        key={task.id} 
        task={task} 
        setTasks={setTasks}
        />
      ))}
    </ul>
  )
}

export default TaskList;