import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import TasksPage from './components/TasksPage/TasksPage'
import HomePage from './components/HomePage/HomePage'
import CalendarPage from './components/CalendarPage/CalendarPage'
import NotesPage from './components/NotesPage/NotesPage'
import Footer from './components/Footer/Footer'
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
    <BrowserRouter>
      <StyledContainer>
        <Header title="Task Tracker App" />
        <StyledContent>
          <StyledSidePanel>
            <Nav />
          </StyledSidePanel>
          <StyledSection>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/tasks'>
              <TasksPage
                tasks={tasks}
                onAddTask={addTask}
                onDeleteTask={deleteTask}
                onToggleTaskDone={toggleTaskDone}
                onSetAllDone={setAllDone}
                onSetAllUndone={setAllUndone}
              />
            </Route>
            <Route path='/calendar' exact>
              <CalendarPage />
            </Route>
            <Route path='/notes' exact>
              <NotesPage />
            </Route>
          </StyledSection>
        </StyledContent>
        <Footer />
      </StyledContainer>
    </BrowserRouter>
  )
}

export default App;
