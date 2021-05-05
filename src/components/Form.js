import { useState } from 'react'

const Form = ({ onAddTask }) => {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")

  const onFormSubmit = (e) => {
    e.preventDefault()

    onAddTask({ name, date })
    setName("")
    setDate("")
  }

  return (
    <form className="add-task-form" onSubmit={onFormSubmit} >
      <label>
        <p className="form-paragraph">Nazwa zadania</p>
        <input
          type="text"
          placeholder="nazwa zadania.."
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <p className="form-paragraph">Termin wykonania</p>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <input type="submit" value="Dodaj" />
    </form>
  )
}

export default Form
