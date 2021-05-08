import { StyledParagraph, StyledTasks, StyledList, StyledBar, StyledButton } from '../styled/StyledTasks'
import Task from './Task'
import { useState } from 'react'

const Tasks = ({ tasks, onDelete, onToggleTaskDone, onSetAllDone, onSetAllUndone }) => {
  const [filter, setFilter] = useState(0)

  if (tasks.length === 0) return (
    <StyledTasks>
      <StyledParagraph noTasks>
        Brak zadań do wyświetlenia.
      </StyledParagraph>
    </StyledTasks>
  )

  return (
    <StyledTasks>
      <StyledBar>
        <StyledButton onClick={() => setFilter(0)} disabled={false}>[Wszystkie]</StyledButton>
        <StyledButton onClick={() => setFilter(1)} disabled={false}>[Zakończone]</StyledButton>
        <StyledButton onClick={() => setFilter(2)} disabled={false}>[Niezakończone]</StyledButton>

        <StyledButton
          disabled={tasks.every(({ done }) => done)}
          onClick={onSetAllDone}
        >
          [Zakończ wszystkie]
        </StyledButton>
        <StyledButton
          disabled={tasks.every(({ done }) => !done)}
          onClick={onSetAllUndone}
        >
          [Odznacz wszystkie]
        </StyledButton>
      </StyledBar>

      <StyledList>

        {(() => {
          switch (filter) {
            case 0:
              return (
                tasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggleTaskDone={onToggleTaskDone}
                  />
                ))
              )
            case 1:
              return (
                tasks.filter(task => task.done === true).map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggleTaskDone={onToggleTaskDone}
                  />
                ))
              )
            case 2:
              return (
                tasks.filter(task => task.done === false).map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggleTaskDone={onToggleTaskDone}
                  />
                ))
              )

            default:
              return ""
          }
        })()}

      </StyledList>
    </StyledTasks>
  )
}

export default Tasks
