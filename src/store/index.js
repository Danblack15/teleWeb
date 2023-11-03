import { createStore } from 'vuex'
import { UserData } from './UserData'

export default createStore({
  modules: {
    userData: UserData
  }
})
