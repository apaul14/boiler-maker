import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk' 

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
))
)