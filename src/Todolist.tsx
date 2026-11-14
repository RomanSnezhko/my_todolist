import { TodolistHeader } from './TodolistHeader'
import { TodolistFilter } from './TodolistFilter'
import { Task } from './Task'
import type { TodolistType } from './App'

type TodolistProps = {
  todolist: TodolistType
}

export function Todolist(props: TodolistProps) {
  return <div>
    <TodolistHeader headerTitle={props.todolist.title} tasksCount={props.todolist.tasks.length} />
    <ul>
      {
        props.todolist.tasks.map(t => <Task key={t.id} task={t} />)
      }
    </ul>
    <TodolistFilter />
  </div>

}
