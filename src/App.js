import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav/Nav'
import TasksPage from './components/TasksPage/TasksPage'
import Footer from './components/Footer'
import { StyledContainer } from './styled/StyledContainer'
import { StyledSidePanel } from './styled/StyledSidePanel'
import { StyledSection } from './styled/StyledSection'
import { StyledContent } from './styled/StyledContent'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'skończyć projekt w react',
      date: '2021-05-28',
      done: false
    },
    {
      id: 2,
      name: 'spotkanie zespołu',
      date: '2021-05-25',
      done: true
    },
    {
      id: 3,
      name: 'wykonać sprawozdania',
      date: '2021-07-17',
      done: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {
      id,
      ...task,
      done: false
    }
    setTasks([...tasks, newTask])
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task))
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
  }

  const setAllUndone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: false })))
  }

  return (
    <>
      <StyledContainer>
        <Header title="Task Tracker App" />
        <StyledContent>
          <StyledSidePanel>
            <Nav />
          </StyledSidePanel>
          <StyledSection>
            <TasksPage
              tasks={tasks}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
              onToggleTaskDone={toggleTaskDone}
              onSetAllDone={setAllDone}
              onSetAllUndone={setAllUndone}
            />
          </StyledSection>
        </StyledContent>
        <Footer />
      </StyledContainer>
    </>
  );
}

export default App;
