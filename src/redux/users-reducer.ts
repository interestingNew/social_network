import { UnknownAction } from "redux";
import { usersAPI } from "../api/api";
import { UsersPageType, UsersType } from "./types";
import { UsersActionsType } from "./types";
import { AppDispatch } from "./state-redux";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export const followSuccess = (id: number) =>
   ({ type: FOLLOW, userId: id } as const);
export const unfollowSuccess = (id: number) =>
   ({ type: UNFOLLOW, userId: id } as const);
export const setUsers = (users: UsersType) =>
   ({ type: SET_USERS, users: users } as const);
export const setCurrentPage = (currentPage: number) =>
   ({ type: SET_CURRENT_PAGE, currentPage } as const);
export const toggleIsFetching = (isFetching: boolean) =>
   ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toggleFollowingProgress = (isFetching: boolean, userId: number) =>
   ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId } as const);

export type FollowType = ReturnType<typeof followSuccess>;
export type UnfollowType = ReturnType<typeof unfollowSuccess>;
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
   isFollowingProgress: [],
};

export const usersReducer = (
   state: UsersPageType = initialState,
   action: UsersActionsType | UnknownAction
) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: true };
               }
               return u;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: false };
               }
               return u;
            }),
         };
      case SET_USERS:
         return { ...state, users: action.users };
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage };
      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching };
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            isFollowingProgress: action.isFetching
               ? [...state.isFollowingProgress, action.userId]
               : state.isFollowingProgress.filter((id) => id != action.userId),
         };
      default:
         return state;
   }
};

export const getUsers = (currentPage: number, pageSize: number) => {
   return (dispatch: AppDispatch) => {
      dispatch(toggleIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize).then((response) => {
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(response.data.items));
      });
   };
};

export const follow = (userId: number) => {
   return (dispatch: AppDispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.followUser(userId).then((response) => {
         if (response.data.resultCode == 0) {
            dispatch(followSuccess(userId));
         }
         dispatch(toggleFollowingProgress(false, userId));
      });
   };
};

export const unfollow = (userId: number) => {
   return (dispatch: AppDispatch) => {
      dispatch(toggleFollowingProgress(true, userId));
      usersAPI.unfollowUser(userId).then((response) => {
         if (response.data.resultCode == 0) {
            dispatch(unfollowSuccess(userId));
         }
         dispatch(toggleFollowingProgress(false, userId));
      });
   };
};
