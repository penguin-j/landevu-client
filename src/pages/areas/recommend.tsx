import { useState } from 'react'

const RecommendArea = () => {
  const RecommendAreaForm = () => {
    const [name, setName] = useState('')
    const handleNameChange = (event) => {
      setName(event.target.value)
    }
    const handleSubmit = () => {
      // todo
    }

    return (
      <div>
        <input type='text' value={name} onChange={handleNameChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  }

  return (
    <>
      <h1>Recommendation</h1>
      <RecommendAreaForm />
    </>
  )
}

export default RecommendArea
