import { ProfilePageType } from "./state";
import { ActionsType } from "./state";

export const AddNewPostAC = () => ({ type: "ADD-POST" } as const);
export const UpdateNewPostTextAC = (text: string) => {
   return { type: "UPDATE-NEW-POST-TEXT", text: text } as const;
};

export type AddNewPostType = ReturnType<typeof AddNewPostAC>;
export type UpdateNewPostTextType = ReturnType<typeof UpdateNewPostTextAC>;

const initialState: ProfilePageType = {
   posts: [
      { message: "Bring sport into your life", countLike: 189 },
      { message: "Always develop", countLike: 295 },
   ],
   newPostText: "",
};

export const profileReducer = (
   state: ProfilePageType = initialState,
   action: ActionsType
) => {
   switch (action.type) {
      case "ADD-POST":
         return {
            ...state,
            posts: [...state.posts, { message: state.newPostText, countLike: 0 }],
            newPostText: "",
         };
      case "UPDATE-NEW-POST-TEXT":
         return { ...state, newPostText: action.text };
      default:
         return state;
   }
};

export default profileReducer;
