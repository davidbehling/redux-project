import { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUser } from '../../redux/user/slice'
import './login.css'

export default function Login() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    
    dispatch(createUser({
      name: name,
      email: email
    }))

    navigate('/home')
  }

  return (
    <div className="container">
      <main className="main">
          <Link to="/home">
            <h1 className="title">Dev Login</h1>
          </Link>

          <form onSubmit={handleLogin} className="form">
            <input 
              type="text" 
              className="input"
              value={name}
              onChange={ event => setName(event.target.value)}
              placeholder='Input your name....'
            />
            <input 
              type="text" 
              className="input"
              value={email}
              onChange={ event => setEmail(event.target.value)}
              placeholder='Input your email...'
            />

            <button type="submit">Access</button>
          </form>
      </main>
    </div>
  )
}
