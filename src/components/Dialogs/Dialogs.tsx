import c from "./Dialogs.module.css"
import { Dialog } from "./Dialog/Dialog"
import { Message } from "./Message/Message"
import { ArrayDialogsType, ArrayMessagesType } from "../../redux/types"

export type DialogsProps = {
   state: {
      dialogs: ArrayDialogsType
      messages: ArrayMessagesType
      newMessageText: string
   }
   isAuth: boolean
   changeDialogs: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
   addNewMessage: () => void
}

export const Dialogs = (props: DialogsProps) => {
   const {
      state,
      isAuth,
      changeDialogs,
      addNewMessage
   } = props

   const onChangeDialogs = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      changeDialogs(e)
   }

   const onAddNewMessage = () => {
      addNewMessage()
   }

   let dialogsElements = state.dialogs.map(d => <Dialog name={d.name} id={d.id} />)
   let messagesElements = state.messages.map(m => <Message message={m.message} />)

   return (
      <div className={c.gialogs}>
         <div className={c.dialog_item}>
            {dialogsElements}
         </div>
         <div className={c.messages}>
            {messagesElements}
            <textarea onChange={onChangeDialogs} value={state.newMessageText}></textarea>
            <br />
            <button onClick={onAddNewMessage}>add</button>
         </div>
      </div>
   )
}