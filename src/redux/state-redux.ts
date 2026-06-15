import { applyMiddleware, combineReducers, Dispatch, legacy_createStore, UnknownAction } from 'redux'
import { sideBarReducer } from './sidebar-reducer'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import { AuthActionsType, AuthDataType, DialogsActionsType, DialogsPageType, ProfileActionsType, ProfilePageType, SideBarType, UsersActionsType, UsersPageType } from './types'
import { thunk } from 'redux-thunk'
import { ThunkDispatch } from 'redux-thunk'

export type AppActionsType = UsersActionsType | ProfileActionsType | DialogsActionsType | AuthActionsType;

const reducers = combineReducers({
  profilePage: profileReducer as any,
  dialogsPage: dialogsReducer as any,
  sideBar: sideBarReducer as any,
  usersPage: usersReducer as any,
  auth: authReducer as any
})

export let store = legacy_createStore(reducers, applyMiddleware(thunk as any))

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sideBar: SideBarType
  usersPage: UsersPageType
  auth: AuthDataType
}

export type AppDispatch = ThunkDispatch<StateType, unknown, AppActionsType> & Dispatch<AppActionsType>;

// @ts-ignore
window.store = store;