import store from './store'
import react from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

   render(
      <Provider store = {store}>

      </Provider>,
      document.getElementById("app")
    )
  


    