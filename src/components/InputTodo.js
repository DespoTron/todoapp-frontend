import React, { Fragment, useState } from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const textBody = { description }
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(textBody),
      })
      window.location = '/'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center my-5">Input Todo</h1>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="add todo"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo
