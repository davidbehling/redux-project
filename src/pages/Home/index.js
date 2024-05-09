import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteAddress, fetchUsers } from '../../redux/user/slice'
import Header from "../../components/Header"
import './home.css'

export default function Home() {
  const dispatch = useDispatch()
  const { user, users, loading } = useSelector((rootReducer) => rootReducer.user)

  function handleDeleteAddress(){
    dispatch(deleteAddress())
  }

  function handleFetchUsers() {
    dispatch(fetchUsers())
  }

  return (
    <>
      <Header/>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="link">
            Login
          </Link>
          <Link to="/home" className="link">
            Painel
          </Link>
          <Link to="/address" className="link">
            Meus endereços
          </Link>
        </nav>

        <main className="content">
          <div className="message">
            <h1 className="title">
              Welcome! { user ? user.name : "Visitor"}
            </h1>

            { user && (
              <span>Email: { user.email }</span>
            )}

            { user && user.address && (
              <>
                <strong className="addressLabel">Actual address:</strong>
                <div className="address">
                  <p> { `Address: ${user.address.location}, number: ${user.address.number}`} </p>
                  
                  <button onClick={handleDeleteAddress}>deleted address</button>
                </div>
              </>
            )}

            <hr/>
            <br/>
            
            <h2> User list </h2>
            <button onClick={handleFetchUsers}> Search Users </button>
            <br/>

            {loading && <strong> Loading... </strong>}

            {!loading && users.map((u) => (
              <div key={u.id}>
                <p> ID: {u.id}, name: {u.name}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}