import './App.css'
import { TodolistItem } from './TodolistItem'
import type { Task } from './types'

const title1 = 'Title 1'
const title2 = 'Title 2'
const title3 = 'Title 3'
const title4 = 'Title 4'

const task1: Task[] = [
  { id: 1, title: 'HTML&CSS', isDone: true },
  { id: 2, title: 'JS', isDone: false },
  { id: 3, title: 'React', isDone: false },
]

const task2: Task[] = [
  { id: 1, title: 'TS', isDone: true },
  { id: 2, title: 'Angular', isDone: false },
  { id: 3, title: 'Node.js', isDone: true },
]

const task3: Task[] = [
  { id: 1, title: 'Talwind', isDone: false },
  { id: 2, title: 'Webstorm', isDone: false },
  { id: 3, title: 'VS', isDone: true },
]

const task4: Task[] = []

function App() {
  return (
    <div className="app">
      <TodolistItem title={title1} tasks={task1} />
      <TodolistItem title={title2} tasks={task2} />
      <TodolistItem title={title3} tasks={task3} />
      <TodolistItem title={title4} tasks={task4} />
    </div>
  )
}

export default App
