import { AddNewPostType, UpdateNewPostTextType } from "./profile-reducer";
import { AddNewMessageType, UpdateNewMessageTextType } from "./dialogs-reducer";
import { Dispatch } from "redux";


export type ActionsType =
   | AddNewPostType
   | UpdateNewPostTextType
   | AddNewMessageType
   | UpdateNewMessageTextType;

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


type MessagesType = {
   id: number;
   message: string;
};
export type ArrayMessagesType = Array<MessagesType>;


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
