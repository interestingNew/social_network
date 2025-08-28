import c from "./Dialogs.module.css"
import { Dialog } from "./Dialog/Dialog"
import { Message } from "./Message/Message"
import { ArrayDialogsType, ArrayMessagesType } from "../.."

type DialogsProps = {
   dialogs: ArrayDialogsType
   messages: ArrayMessagesType
}

export const Dialogs = (props: DialogsProps) => {

   let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id} />)
   let messagesElements = props.messages.map(m => <Message message={m.message} />)

   return (
      <div className={c.gialogs}>
         <div className={c.dialog_item}>
            {dialogsElements}
         </div>
         <div className={c.messages}>
            {messagesElements}
         </div>
      </div>
   )
}