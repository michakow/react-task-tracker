import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggleTaskDone }) => {
  return (
    <li
      className="list-element"
      onDoubleClick={() => onToggleTaskDone(task.id)}
    >
      <p className="task-name">
        {task.name}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </p>
      <p className="task-date">
        {task.date ? task.date : 'bez terminu'}
      </p>
      <p className="task-done">
        {task.done ? 'yes' : 'no'}
      </p>
    </li>
  )
}

export default Task
