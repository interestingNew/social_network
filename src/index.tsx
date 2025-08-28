import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Testapp from './App test';
import reportWebVitals from './reportWebVitals';

type PostsType = {
  message: string
  countLike: number
}

export type ArrayPostsType = Array<PostsType>

let posts: ArrayPostsType = [
  { message: "Bring sport into your life", countLike: 189 },
  { message: "Always develop", countLike: 295 }
]

type DialogsType = {
  id: number
  name: string
}

export type ArrayDialogsType = Array<DialogsType>

let dialogs: ArrayDialogsType = [
  { id: 1, name: "Natali" },
  { id: 2, name: "Ira" },
  { id: 3, name: "Sergey" },
  { id: 4, name: "Alex" },
  { id: 5, name: "Sveta" }
]

type MessagesType = {
  id: number
  message: string
}

export type ArrayMessagesType = Array<MessagesType>

let messages: ArrayMessagesType = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Bench" }
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
