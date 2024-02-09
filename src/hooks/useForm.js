import { useState } from 'react'

function useForm(initialForm) {
  const [formState, setFormState] = useState(initialForm)

  function handleInputChange(e) {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormState({ ...formState, [e.target.name]: value })
  }

  return { formState, setFormState, handleInputChange }
}

export { useForm }
