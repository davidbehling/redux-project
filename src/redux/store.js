import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => {    
    return [sagaMiddleware]
  }
})

sagaMiddleware.run(rootSaga)
