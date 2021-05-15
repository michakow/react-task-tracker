import { useState } from 'react'
import Tab from './Tab'
import Form from './Form'
import TaskList from './TaskList'

const TasksPage = ({ tasks, onAddTask, onDeleteTask, onToggleTaskDone, onSetAllDone, onSetAllUndone }) => {
  const [showForm, setShowForm] = useState(true)
  const [showTasks, setShowTasks] = useState(true)

  return (
    <>
      <Tab
        title={`${showForm ? 'Zamknij' : 'Otwórz'} panel nowego zadania`}
        onAction={() => setShowForm(!showForm)}
        show={showForm}
      />
      {showForm && <Form onAddTask={onAddTask} />}
      <Tab
        title={`${showTasks ? 'Ukryj' : 'Pokaż'} listę zadań`}
        onAction={() => setShowTasks(!showTasks)}
        show={showTasks}
      />
      {showTasks && <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onToggleTaskDone={onToggleTaskDone}
        onSetAllDone={onSetAllDone}
        onSetAllUndone={onSetAllUndone}
      />}
    </>
  )
}

export default TasksPage
