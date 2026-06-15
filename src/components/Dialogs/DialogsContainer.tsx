import { Dialogs, DialogsProps } from "./Dialogs";
import {
   AddNewMessageAC,
   UpdateNewMessageTextAC,
} from "../../redux/dialogs-reducer";
import { connect, useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateType } from "../../redux/state-redux";
import { DialogsPageType } from "../../redux/types";
import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


const mapStateToProps = (state: StateType) => {
   return {
      state: state.dialogsPage
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

export const DialogsContainerRedirect = compose(
   withAuthRedirect,
   connect(mapStateToProps, mapDispatchToProps)
)(Dialogs) as React.ComponentType<any>;

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);  // при помощи connect
// export const DialogsContainerRedirect = withAuthRedirect(DialogsContainer)


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
