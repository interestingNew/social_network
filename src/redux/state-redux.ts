import { combineReducers, legacy_createStore } from 'redux'
import sideBarReducer from './sidebar-reducer'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer
})

export let store = legacy_createStore(reducers)

export type StateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;