import './App.css'
import { Todolist } from './Todolist'

const todolists = [
  {
    id: 1, title: "Что купить", tasks: [
      { id: 1, title: "Молоко", isDone: true },
      { id: 2, title: "Coca Cola", isDone: true },
      { id: 3, title: "Хлеб", isDone: false }
    ]
  },
  {
    id: 2, title: "Что петь", tasks: [
      { id: 1, title: "We are the champions", isDone: true },
      { id: 2, title: "Очи чёрные", isDone: false },
      { id: 3, title: "Rap God", isDone: true }
    ]
  },
  {
    id: 3, title: "Что учить", tasks: [
      { id: 1, title: "JS", isDone: true },
      { id: 2, title: "React", isDone: true },
    ]
  },
]

export type TodolistType = typeof todolists[number]
export type TaskType = typeof todolists[number]['tasks'][number]

function App() {
  return <>
    {
      todolists.map(t => <div key={t.id}> <Todolist todolist={t} /></div>)
    }
  </>
}

export default App
