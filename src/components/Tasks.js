import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggleTaskDone }) => {
  if (tasks.length === 0) return <p className="no-task">Brak zadań do wyświetlenia.</p>

  return (
    <ul className="tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          className="list-element"
          task={task}
          onDelete={onDelete}
          onToggleTaskDone={onToggleTaskDone}
        />
      ))}
    </ul>
  )
}

export default Tasks
