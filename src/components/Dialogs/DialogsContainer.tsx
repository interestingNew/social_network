import { Dialogs } from "./Dialogs";
import {
   AddNewMessageAC,
   UpdateNewMessageTextAC,
} from "../../redux/dialogs-reducer";
import { connect, useDispatch, useSelector } from "react-redux";
import { StateType } from "../../redux/state-redux";
import { AppDispatch, DialogsPageType } from "../../redux/types";


const mapStateToProps = (state: StateType) => {
   return {
      state: state.dialogsPage,
   };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
   return {
      changeDialogs: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
         dispatch(UpdateNewMessageTextAC(e.currentTarget.value));
      },
      addNewMessage: () => {
         dispatch(AddNewMessageAC());
      },
   };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);  // при помощи connect

// export const DialogsContainer = () => {    // при помощи хуков
//    const dialogsPage = useSelector<StateType, DialogsPageType>(
//       (state) => state.dialogsPage
//    );
//    const dispatch = useDispatch();

//    const changeDialogs = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//       dispatch(UpdateNewMessageTextAC(e.currentTarget.value));
//    };

//    const addNewMessage = () => {
//       dispatch(AddNewMessageAC());
//    };

//    return (
//       <div>
//          <Dialogs
//             state={dialogsPage}
//             changeDialogs={changeDialogs}
//             addNewMessage={addNewMessage}
//          />
//       </div>
//    );
// };
