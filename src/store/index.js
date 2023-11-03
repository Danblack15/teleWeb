import { createStore } from 'vuex'
import { UserData } from './UserData'
import { BasesData } from './BasesData'

export default createStore({
  modules: {
    userData: UserData,
    basesData: BasesData
  }
})
