import c from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

type DialogPropsType = {
   name: string
   id: number
}

type isActiveType = {
   isActive: boolean
}
const setActive = ({ isActive }: isActiveType) => (isActive ? c.active : '')

const Dialog = (props: DialogPropsType) => {
   const path = "/dialogs/" + props.id
   return (
      <div className={c.dialog}>
         <NavLink className={setActive} to={path}>{props.name}</NavLink>
      </div>
   )
}

type MessagePropsType = {
   message: string
}

const Message = (props: MessagePropsType) => {
   return <div className={c.message}>{props.message}</div>
}

export const Dialogs = () => {

   let dialogs = [
      { id: 1, name: "Natali" },
      { id: 2, name: "Ira" },
      { id: 3, name: "Sergey" },
      { id: 4, name: "Alex" },
      { id: 5, name: "Sveta" }
   ]

   let messages = [
      { id: 1, message: "Hello" },
      { id: 2, message: "How are you" },
      { id: 3, message: "Bench" }
   ]

   let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} />)
   let messagesElements = messages.map(m => <Message message={m.message} />)

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