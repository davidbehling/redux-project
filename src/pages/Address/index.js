import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress } from '../../redux/user/slice'
import Header from "../../components/Header"
import './address.css'

export default function Address() {
  const dispatch = useDispatch()
  const { user } = useSelector((rootReducer) => rootReducer.user)

  const [addressName, setAddressName] = useState(user?.address?.location ?? "")
  const [addressNumber, setAddressNumber] = useState(user?.address?.number ?? "")

  const navigate = useNavigate()

  function handleRegisterAddress(){
    dispatch(addAddress({
      location: addressName,
      number: addressNumber
    }))

    navigate('/home')
  }

  return (
    <>
      <Header/>
      <div className="container">
        <main className="content">
          <div>
            <Link to="/home">
              Back
            </Link>
          </div>

          <section className="address">
            <h2>My Address:</h2>

            <input 
              type="text" 
              className="input"
              placeholder="Ex: Rua centro, x"
              value={addressName}
              onChange={ (e) => setAddressName(e.target.value) }
            />
            <input 
              type="text" 
              className="input"
              placeholder="Numero"
              value={addressNumber}
              onChange={ (e) => setAddressNumber(e.target.value) }
            />

            <button className="button" onClick={handleRegisterAddress}>
              Changed Save!
            </button>
          </section>
        </main>
      </div>
    </>
  )
}