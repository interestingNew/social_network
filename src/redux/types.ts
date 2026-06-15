import {
   AddNewPostType,
   setUserProfileType,
   UpdateNewPostTextType,
} from "./profile-reducer";
import { AddNewMessageType, UpdateNewMessageTextType } from "./dialogs-reducer";
import {
   FollowType,
   SetCurrentPageType,
   SetUsersType,
   ToggleIsFetchingType,
   ToggleFollowingProgress,
   UnfollowType,
} from "./users-reducer";
import { SetUserDateType } from "./auth-reducer";

export type UsersActionsType =
   | FollowType
   | UnfollowType
   | SetUsersType
   | SetCurrentPageType
   | ToggleIsFetchingType
   | ToggleFollowingProgress;
export type ProfileActionsType =
   | AddNewPostType
   | UpdateNewPostTextType
   | setUserProfileType;
export type DialogsActionsType = 
   | AddNewMessageType
   | UpdateNewMessageTextType;
export type AuthActionsType = 
   | SetUserDateType;





export type ProfilePageType = {
   posts: ArrayPostsType;
   newPostText: string;
   profile: ProfileType;
};
type PostType = {
   message: string;
   countLike: number;
};
export type ArrayPostsType = Array<PostType>;
export type ProfileType = {
   aboutMe: string|null;
   contacts: {
      facebook: string|null;
      website: string|null;
      vk: string|null;
      twitter: string|null;
      instagram: string|null;
      youtube: string|null;
      github: string|null;
      mainLink: string|null;
   };
   lookingForAJob: boolean;
   lookingForAJobDescription: string|null;
   fullName: string;
   userId: number;
   photos: {
      small: string|null;
      large: string|null;
   };
};


export type DialogsPageType = {
   dialogs: ArrayDialogsType;
   messages: ArrayMessagesType;
   newMessageText: string;
};
type DialogType = {
   id: number;
   name: string;
};
export type ArrayDialogsType = Array<DialogType>;
type MessageType = {
   id: number;
   message: string;
};
export type ArrayMessagesType = MessageType[];


export type SideBarType = {
   friends: ArrayDialogsType;
};


export type UsersPageType = {
   users: UsersType;
   pageSize: number;
   totalUsersCount: number;
   currentPage: number;
   isFetching: boolean;
   isFollowingProgress: number[];
};
export type UserType = {
   // id: number,
   // fullname: string,
   // follow: boolean,
   // status: string,
   // address: {
   //    city: string,
   //    country: string
   // },
   // avatar: string
   name: string;
   id: number;
   uniqueUrlName: null;
   photos: {
      small: null;
      large: null;
   };
   status: null;
   followed: boolean;
};
export type UsersType = Array<UserType>;


export type AuthDataType = {
   id: number|null,
   login: string|null,
   email: string|null,
   isAuth: boolean
}