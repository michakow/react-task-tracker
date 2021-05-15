
import { StyledIcon, StyledItem, StyledParagraph, StyledParagraphs } from '../../styled/StyledTasks'

const Task = ({ task, onDeleteTask, onToggleTaskDone }) => {

  return (
    <StyledItem
      onDoubleClick={() => onToggleTaskDone(task.id)}
      done={task.done}
    >
      <StyledParagraphs>
        <StyledParagraph primary>
          {task.name}
        </StyledParagraph>

        <StyledParagraph secondary>
          {task.date ? `Termin do: ${task.date}` : 'bez terminu'}
        </StyledParagraph>
      </StyledParagraphs>

      <StyledIcon
        onClick={() => onDeleteTask(task.id)}
      />
    </StyledItem>
  )
}

export default Task
