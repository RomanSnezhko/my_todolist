import type { Task } from './types'

type TodolistItemProps = {
  title: string
  tasks: Task[]
}

export const TodolistItem = ({ title, tasks }: TodolistItemProps) => {
  const hasTasks = tasks.length > 0

  const tasksContent = hasTasks ? (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
        </li>
      ))}
    </ul>
  ) : (
    <p>Задач НЕТ</p>
  )

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {tasksContent}
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}
