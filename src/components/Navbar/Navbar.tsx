import c from "./Navbar.module.css"
import { NavLink } from "react-router-dom"
import { ArrayDialogsType } from '../../redux/state'
import { Friend } from "./Friends/Friend"

type NavbarPropsType = {
   state: {
      friends: ArrayDialogsType
   }
}

type isActiveType = {
   isActive: boolean
}
const setActive = ({ isActive }: isActiveType) => (isActive ? c.active : '')

export const Navbar = (props: NavbarPropsType) => {
   const {
      state
   } = props

   let friends = state.friends.map(f => <Friend name={f.name} id={f.id} />)

   return <nav className={c.nav}>
      <div className={c.item}><NavLink className={setActive} to="/profile">Profile</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/dialogs">Messages</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/users">Users</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/news">News</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/music">Music</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/settings">Settings</NavLink></div>
      <div className={c.item}>
         <div className={c.friendsWrapper}>
            <NavLink className={setActive} to="/friends">Friends</NavLink>
            <div className={c.friends}>
               {friends}
            </div>
         </div>
      </div>
   </nav>
}