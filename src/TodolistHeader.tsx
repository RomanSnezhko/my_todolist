type TodolistHeaderProps = {
  headerTitle: string,
  tasksCount: number
}

export function TodolistHeader(props: TodolistHeaderProps) {
  return <>
    <h3>{props.headerTitle} ({props.tasksCount})</h3>
    <div>
      <input defaultValue={"JS"} />
      <button>+</button>
    </div>
  </>
}