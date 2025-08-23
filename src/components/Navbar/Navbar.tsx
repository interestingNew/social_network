import c from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

type isActiveType = {
   isActive: boolean
}
const setActive = ({ isActive }: isActiveType) => (isActive ? c.active : '')

export const Navbar = () => {
   return <nav className={c.nav}>
      <div className={c.item}><NavLink className={setActive} to="/profile">Profile</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/dialogs">Messages</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/news">News</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/music">Music</NavLink></div>
      <div className={c.item}><NavLink className={setActive} to="/settings">Settings</NavLink></div>
   </nav>
}