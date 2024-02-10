import { useState } from 'react'

function useForm(initialForm) {
  const [formState, setFormState] = useState(initialForm)

  function handleInputChange(e) {
    let value

    if (e.target.type === 'checkbox') {
      value = e.target.checked
    } else if (e.target.type === 'number') {
      value = e.target.value === '' ? '' : Number(e.target.value)
    } else {
      value = e.target.value
    }

    setFormState({ ...formState, [e.target.name]: value })
  }

  return { formState, setFormState, handleInputChange }
}

export { useForm }
