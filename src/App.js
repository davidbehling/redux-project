import { BrowserRouter } from "react-router-dom"
import RoutesApp from "./router"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesApp/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
