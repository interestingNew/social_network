import { SideBarType } from "./state";

const initialState: SideBarType = {
   friends: [
      { id: 2, name: "Natali" },
      { id: 3, name: "Ira" },
      { id: 4, name: "Sergey" },
   ],
};

export const sideBarReducer = (
   state: SideBarType = initialState,
   action: any
) => {
   return state;
};

export default sideBarReducer;
