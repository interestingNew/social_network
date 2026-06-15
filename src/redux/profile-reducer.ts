import { profileAPI } from "../api/api";
import { AppDispatch } from "./state-redux";
import { ProfileActionsType, ProfilePageType, ProfileType } from "./types";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export const AddNewPostAC = () => ({ type: ADD_POST } as const);
export const UpdateNewPostTextAC = (text: string) => ({ type: UPDATE_NEW_POST_TEXT, text: text } as const);
export const setUserProfile = (profile: ProfileType) => ({ type: SET_USER_PROFILE, profile } as const)

export type AddNewPostType = ReturnType<typeof AddNewPostAC>;
export type UpdateNewPostTextType = ReturnType<typeof UpdateNewPostTextAC>;
export type setUserProfileType = ReturnType<typeof setUserProfile>

const initialState: ProfilePageType = {
   posts: [
      { message: "Bring sport into your life", countLike: 189 },
      { message: "Always develop", countLike: 295 },
   ],
   newPostText: "",
   profile: {
      aboutMe: 'hey',
   contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
   },
   lookingForAJob: true,
   lookingForAJobDescription: 'ищу крутую работу',
   fullName: 'Пасынков Евгений',
   userId: 32670,
   photos: {
      small: null,
      large: null,
   }
   }
};

export const profileReducer = (
   state: ProfilePageType = initialState,
   action: ProfileActionsType
) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: [...state.posts, { message: state.newPostText, countLike: 0 }],
            newPostText: "",
         };
      case UPDATE_NEW_POST_TEXT:
         return { ...state, newPostText: action.text };
      case SET_USER_PROFILE:
         return {...state, profile: action.profile}
      default:
         return state;
   }
};

export const getProfile = (userId: string) => {
   return (dispatch: AppDispatch) => {
      profileAPI.getProfile(userId)
               .then((response) => {
                  dispatch(setUserProfile(response.data));
               });
   }
}