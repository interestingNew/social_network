import dialogsReducer, { AddNewMessageType, UpdateNewMessageTextType } from "./dialogs-reducer";
import profileReducer, { AddNewPostType, UpdateNewPostTextType } from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

export type ActionsType = AddNewPostType | UpdateNewPostTextType | AddNewMessageType | UpdateNewMessageTextType

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

export type StateType = {
  profilePage: {
    posts: ArrayPostsType;
    newPostText: string;
  };
  dialogsPage: {
    dialogs: ArrayDialogsType;
    messages: ArrayMessagesType;
    newMessageText: string;
  };
  sideBar: {
    friends: ArrayDialogsType;
  };
};

export type StoreType = {
  _callSubscriber: () => void;
  _state: StateType;
  getState: () => StateType;
  subscribe: (observer: () => void) => void;
  dispatch: (action: ActionsType) => void;
};

export let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { message: "Bring sport into your life", countLike: 189 },
        { message: "Always develop", countLike: 295 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Evgen" },
        { id: 2, name: "Natali" },
        { id: 3, name: "Ira" },
        { id: 4, name: "Sergey" },
        { id: 5, name: "Alex" },
        { id: 6, name: "Sveta" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Bench" },
      ],
      newMessageText: "",
    },
    sideBar: {
      friends: [
        { id: 2, name: "Natali" },
        { id: 3, name: "Ira" },
        { id: 4, name: "Sergey" },
      ],
    },
  },
  _callSubscriber() {
    console.log("Render");
  },
  getState() {
    return this._state;
  },
  dispatch(action: ActionsType) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);

    this._callSubscriber();
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
};

export type ProfilePageType = {
  posts: ArrayPostsType;
  newPostText: string;
}

export type DialogsPageType = {
  dialogs: ArrayDialogsType;
  messages: ArrayMessagesType;
  newMessageText: string;
}

export type SideBarType = {
  friends: ArrayDialogsType;
}

// @ts-ignore
window.store = store;
