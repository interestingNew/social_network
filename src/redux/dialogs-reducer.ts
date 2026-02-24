import { ActionsType, DialogsPageType } from "./types";

export const AddNewMessageAC = () =>
  ({ type: "ADD-NEW-MESSAGE-ITEM" } as const);
export const UpdateNewMessageTextAC = (text: string) =>
  ({ type: "UPDATE-NEW-MESSAGE-TEXT", text: text } as const);

export type AddNewMessageType = ReturnType<typeof AddNewMessageAC>;
export type UpdateNewMessageTextType = ReturnType<typeof UpdateNewMessageTextAC>;


const initialState: DialogsPageType = {
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
}

export const dialogsReducer = (
  state: DialogsPageType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case "ADD-NEW-MESSAGE-ITEM": 
      let newMessageText = state.newMessageText;
      return {...state,
        messages: [...state.messages, {
          id: state.messages.length + 1,
          message: newMessageText,
        }],
        newMessageText: ''
      }
    case "UPDATE-NEW-MESSAGE-TEXT":
      return {...state,
        newMessageText: action.text
      }
    default:
      return state
  }
};
