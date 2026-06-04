import { UsersPageType, UsersType } from "./types";
import { UsersActionsType } from "./types";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SETUSERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export const follow = (id: number) => ({ type: FOLLOW, userId: id } as const);
export const unfollow = (id: number) => ({ type: UNFOLLOW, userId: id } as const);
export const setUsers = (users: UsersType) => ({ type: SET_USERS, users: users } as const);
export const setCurrentPage = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const toggleIsFetching = (isFetching: boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching } as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const)

export type FollowType = ReturnType<typeof follow>;
export type UnfollowType = ReturnType<typeof unfollow>;
export type SetUsersType = ReturnType<typeof setUsers>;
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>;
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>;
export type ToggleFollowingProgress = ReturnType<typeof toggleFollowingProgress>;

const initialState: UsersPageType = {
   users: [],
   pageSize: 10,
   totalUsersCount: 98,
   currentPage: 1,
   isFetching: true,
   isFollowingProgress: []
};

export const usersReducer = (
   state: UsersPageType = initialState,
   action: UsersActionsType
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
      case TOGGLE_IS_FETCHING:
         return {...state,
            isFetching: action.isFetching
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {...state,
            isFollowingProgress:
            action.isFetching?
            [...state.isFollowingProgress, action.userId]:
            state.isFollowingProgress.filter(id => id != action.userId)
      }
      default:
         return state;
   }
};
