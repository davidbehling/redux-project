import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/user/slice'
import './header.css'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((rootReducer) => rootReducer.user)

  function handleLogin(){
    navigate("/")
  }

  function handleLogout(){
    dispatch(logoutUser())
    navigate("/")
  }

  return(
    <header>
      <div className="content">
        <Link to="/home">
          <h1>Dev<span>Redux</span></h1>
        </Link>

        {user ? (
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="login" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  )
}
