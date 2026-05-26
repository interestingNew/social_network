import { UsersPageType, UsersType } from "./types";
import { ActionsType } from "./types";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SETUSERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

export const FollowAC = (id: number) => ({ type: FOLLOW, userId: id } as const);
export const UnfollowAC = (id: number) => ({ type: UNFOLLOW, userId: id } as const);
export const SetUsersAC = (users: UsersType) => ({ type: SET_USERS, users: users } as const);
export const SetCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const);

export type FollowType = ReturnType<typeof FollowAC>;
export type UnfollowType = ReturnType<typeof UnfollowAC>;
export type SetUsersType = ReturnType<typeof SetUsersAC>;
export type SetCurrentPageType = ReturnType<typeof SetCurrentPageAC>;

const initialState: UsersPageType = {
   users: [],
   pageSize: 10,
   totalUsersCount: 98,
   currentPage: 1
};

export const usersReducer = (
   state: UsersPageType = initialState,
   action: ActionsType
) => {
   switch (action.type) {
      case FOLLOW:
         return {...state,
            users: state.users.map(u => {
               if(u.id === action.userId){
                  return {...u, followed: true}
               }
               return u;
            }
            )
         }
      case UNFOLLOW:
         return {...state,
            users: state.users.map(u => {
               if(u.id === action.userId){
                  return {...u, followed: false} 
               }
               return u;
            }
            )
         }
      case SET_USERS:
         return {...state,
            users: action.users
         }
      case SET_CURRENT_PAGE:
         return {...state,
            currentPage: action.currentPage
         }
      default:
         return state;
   }
};
