type PostsType = {
   message: string
   countLike: number
}
export type ArrayPostsType = Array<PostsType>

type DialogsType = {
   id: number
   name: string
}
export type ArrayDialogsType = Array<DialogsType>

type MessagesType = {
   id: number
   message: string
}
export type ArrayMessagesType = Array<MessagesType>

export type StateType = {
   profilePage: {
      posts:ArrayPostsType
      newPostText: string
   }
   dialogsPage: {
      dialogs: ArrayDialogsType
      messages: ArrayMessagesType
      newMessageText: string
   }
   sideBar: {
      friends: ArrayDialogsType
   }
}

export type storeType = {
   _rerenderEntireTree: () => void
   _state: StateType
   getState: () => StateType
   addNewPostItem: (newValue: string) => void
   updateNewPostText: (newPostText: string) => void
   updateNewMessageText: (newMessageText: string) => void
   addNewMessageItem: (newMessage: string) => void
   _subscribe: (observer:() => void) => void
}

export let store: storeType = {
   _rerenderEntireTree() {
      console.log("Render")
   },
   _state: {
      profilePage: {
         posts: [
            { message: "Bring sport into your life", countLike: 189 },
            { message: "Always develop", countLike: 295 }
         ],
         newPostText: ''
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Evgen" },
            { id: 2, name: "Natali" },
            { id: 3, name: "Ira" },
            { id: 4, name: "Sergey" },
            { id: 5, name: "Alex" },
            { id: 6, name: "Sveta" }
         ],
         messages: [
            { id: 1, message: "Hello" },
            { id: 2, message: "How are you" },
            { id: 3, message: "Bench" }
         ],
         newMessageText: ''
      },
      sideBar: {
         friends: [
            { id: 2, name: "Natali" },
            { id: 3, name: "Ira" },
            { id: 4, name: "Sergey" }
         ]
      }
   },
   getState () {
      return this._state;
   },
   addNewPostItem(newValue: string) {
      let newPost = { message: newValue, countLike: 0 };
      let copyStore = {...this}
      copyStore._state = {...this._state}
      copyStore._state.profilePage = {...this._state.profilePage}
      copyStore._state.profilePage.posts = [...this._state.profilePage.posts, newPost]
      store = copyStore
      store._rerenderEntireTree()
      store._state.profilePage.newPostText = ''
   },
   updateNewPostText(newPostText: string) {
      this._state.profilePage.newPostText = newPostText
      this._rerenderEntireTree()
   },
   addNewMessageItem(newMessage: string) {
      let newMessageItem = { id: this._state.dialogsPage.messages.length + 1, message: newMessage}
      this._state.dialogsPage.messages.push(newMessageItem)
      this._rerenderEntireTree()
      this._state.dialogsPage.newMessageText = ''
   },
   updateNewMessageText(newMessageText: string) {
      this._state.dialogsPage.newMessageText = newMessageText
      this._rerenderEntireTree()
   },
   _subscribe(observer: ()=>void) {
      this._rerenderEntireTree = observer
   }
}


// @ts-ignore
window.store = store
