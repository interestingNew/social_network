import { AddNewPostType, UpdateNewPostTextType } from "./profile-reducer";
import { AddNewMessageType, UpdateNewMessageTextType } from "./dialogs-reducer";
import { Dispatch } from "redux";
import { FollowType, SetUsersType, UnfollowType } from "./users-reducer";


export type ActionsType =
   | AddNewPostType
   | UpdateNewPostTextType
   | AddNewMessageType
   | UpdateNewMessageTextType
   | FollowType
   | UnfollowType
   | SetUsersType;

export type AppDispatch = Dispatch<ActionsType>


type PostType = {
   message: string;
   countLike: number;
};
export type ArrayPostsType = Array<PostType>;


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

type UserType = {
   // id: number,
   // fullname: string,
   // follow: boolean,
   // status: string,
   // address: {
   //    city: string,
   //    country: string
   // },
   // avatar: string
   name: string,
   id: number,
   uniqueUrlName: null,
   photos: {
      small: null,
     large: null
   },
   status: null,
   followed: boolean
}
export type UsersType = Array<UserType>


export type ProfilePageType = {
   posts: ArrayPostsType;
   newPostText: string;
};
export type DialogsPageType = {
   dialogs: ArrayDialogsType;
   messages: ArrayMessagesType;
   newMessageText: string;
};
export type SideBarType = {
   friends: ArrayDialogsType;
};
export type UsersPageType = {
   users: UsersType
}
