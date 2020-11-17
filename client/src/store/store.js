import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
}