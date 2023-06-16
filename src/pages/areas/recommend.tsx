import { useState } from 'react'

const RecommendArea = () => {
  const [data, setData] = useState('')

  const RecommendAreaForm = () => {
    const [name, setName] = useState('')
    const handleNameChange = (event) => {
      setName(event.target.value)
    }

    const handleSubmit = () => {
      setData('Hello from ' + name)
    }

    return (
      <div>
        <input type='text' value={name} onChange={handleNameChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  }

  if (!data) {
    return (
      <>
        <h1>Recommendation</h1>
        <RecommendAreaForm />
      </>
    )
  }

  return (
    <>
      <h1>Recommendation</h1>
      <>{data}</>
    </>
  )
}

export default RecommendArea
