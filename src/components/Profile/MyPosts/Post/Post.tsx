import c from "./Post.module.css"

type Props = {
   message: string
   countLike: number
}

export const Post = (props: Props) => {
   return (
      <div className={c.item}>
         {props.message}
         <div>
            <span>like {props.countLike}</span>
         </div>
      </div>
   )
}