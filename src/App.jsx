import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post('https://server-g79k.onrender.com/register', {
      phoneNumber,
      email,
      password
    })
    console.log(res.data)
    alert('User registered successfully!')
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App

