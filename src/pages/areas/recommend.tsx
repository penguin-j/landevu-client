import { useState } from 'react'

const RecommendArea = () => {
  const [data, setData] = useState()

  const RecommendAreaForm = () => {
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')

    const handleName1Change = (event) => {
      setName1(event.target.value)
    }
    const handleName2Change = (event) => {
      setName2(event.target.value)
    }

    const handleSubmit = () => {
      const result = {
        name1: name1,
        name2: name2,
      }
      setData(result)
    }

    return (
      <div>
        <input type='text' value={name1} onChange={handleName1Change} />
        <input type='text' value={name2} onChange={handleName2Change} />
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
      <p>The first value is {data.name1}.</p>
      <p>The second value is {data.name2}.</p>
    </>
  )
}

export default RecommendArea
