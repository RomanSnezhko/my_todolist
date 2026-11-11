import { TodolistHeader } from './TodolistHeader'
import { TodolistFilter } from './TodolistFilter'
import { Task } from './Task'

type TodolistProps = {
  title: string
}

export function Todolist(props: TodolistProps) {
  return <div>
    <TodolistHeader headerTitle={props.todolist.title} tasksCount={props.todolist.tasks.length} />
    <ul>
      {
        props.todolist.tasks.map(() => <Task />)
      }
    </ul>
    <TodolistFilter />
  </div>

}
