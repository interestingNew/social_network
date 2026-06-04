import { AuthActionsType, AuthDataType } from "./types";
import userPhoto from "../images/userPhoto.jpg"

const SET_USER_DATE = "SET_USER_DATE"

export const setAuthUserData = (data: AuthDataType) => ({type: SET_USER_DATE, data} as const)

const initialState: AuthDataType = {
   id: null,
   login: null,
   email: null,
   isAuth: false
};

export const authReducer = (
   state: AuthDataType = initialState,
   action: AuthActionsType
) => {
   switch (action.type) {
      case SET_USER_DATE:
         return {
            ...state,
            ...action.data,
            isAuth: true
         } 
      default:
         return state
   }
};

export type SetUserDateType = ReturnType<typeof setAuthUserData>