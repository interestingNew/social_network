import c from "./../Dialogs.module.css"

type MessagePropsType = {
   message: string
}

export const Message = (props: MessagePropsType) => {
   const {
      message
   } = props
   
   return <div className={c.message}>{message}</div>
}
