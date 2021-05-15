import { useState } from 'react'
import { StyledButton, StyledForm, StyledInput, StyledLabel, StyledParagraph } from '../../styled/StyledForm'

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
    <StyledForm onSubmit={onFormSubmit}>
      <StyledParagraph>Podaj nazwę i termin końcowy na wykonanie zadania</StyledParagraph>
      <StyledLabel primary>
        <StyledInput
          type="text"
          placeholder="nazwa zadania.."
          required={true}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel secondary >
        <StyledInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </StyledLabel>
      <StyledButton type="submit" value="Zapisz zadanie" />
    </StyledForm>
  )
}

export default Form
