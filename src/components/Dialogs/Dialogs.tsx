import c from "./Dialogs.module.css"
import { Dialog } from "./Dialog/Dialog"
import { Message } from "./Message/Message"
import { ArrayDialogsType, ArrayMessagesType } from "../../redux/state"
import { useRef } from "react"

type DialogsProps = {
   state: {
      dialogs: ArrayDialogsType
      messages: ArrayMessagesType
      newMessageText: string
   }
   updateNewMessageText: (newMessageText: string) => void
   addNewMessageItem: (newMessage: string) => void
}


export const Dialogs = (props: DialogsProps) => {
   const textAreaRef = useRef<HTMLTextAreaElement>(null)

   const onChangeHandler = () => {
      if(textAreaRef.current?.value) {
         props.updateNewMessageText(textAreaRef.current.value)
      }
   }

   const addNewMessage = () => {
      if(textAreaRef.current?.value) {
         props.addNewMessageItem(textAreaRef.current.value)
      }
   }

   let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
   let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

   return (
      <div className={c.gialogs}>
         <div className={c.dialog_item}>
            {dialogsElements}
         </div>
         <div className={c.messages}>
            {messagesElements}
            <textarea ref={textAreaRef} onChange={onChangeHandler} value={props.state.newMessageText}></textarea>
            <br />
            <button onClick={addNewMessage}>add</button>
         </div>
      </div>
   )
}