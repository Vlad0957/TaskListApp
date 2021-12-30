import {createStore} from 'redux'
import reducerTask from './reducer'


const preloadedState = {
  tasks: [
    
  ],
  users: [],
}

const mainStore = createStore(
  reducerTask,
  preloadedState
)

export default mainStore
