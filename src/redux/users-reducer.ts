import { UsersPageType, UsersType } from "./types";
import { ActionsType } from "./types";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"

export const FollowAC = (id: number) => ({ type: FOLLOW, userId: id } as const);
export const UnfollowAC = (id: number) => ({ type: UNFOLLOW, userId: id } as const);
export const SetUsersAC = (users: UsersType) => ({ type: SETUSERS, users: users } as const);

export type FollowType = ReturnType<typeof FollowAC>;
export type UnfollowType = ReturnType<typeof UnfollowAC>;
export type SetUsersType = ReturnType<typeof SetUsersAC>;

const initialState: UsersPageType = {
   users: []
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
                  return {...u, follow: true}
               }
               return u;
            }
            )
         }
      case UNFOLLOW:
         return {...state,
            users: state.users.map(u => {
               if(u.id === action.userId){
                  return {...u, follow: false} 
               }
               return u;
            }
            )
         }
      case SETUSERS:
         return {...state,
            users: [...state.users, ...action.users]
         }
      default:
         return state;
   }
};
