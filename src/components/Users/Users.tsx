import { UsersPageType, UsersType } from "../../redux/types";
import c from "./Users.module.css";
import axios from 'axios';
import userPhoto from '../../images/userPhoto.jpg';

type UsersTypeProps = {
   users: UsersType;
   follow: (id: number) => void;
   unfollow: (id: number) => void;
   setUsers: (users: UsersType) => void;
};

export const Users = ({
   users,
   follow,
   unfollow,
   setUsers,
}: UsersTypeProps) => {

let getUsers = () => {
   if (users.length === 0) {
      
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         setUsers(response.data.items)
      })
   }
}
   

   return (
      <div>
         <button onClick={getUsers}>Get Users</button>
         {users.map((u) => (
            <div className={c.user} key={u.id}>
               <div>
                  <div>
                     <img className={c.avatar} src={userPhoto} />
                  </div>
                  <div>
                     {u.followed? (
                        <button
                           onClick={() => {
                              unfollow(u.id);
                           }}
                        >
                           Unfollow
                        </button>
                     ) : (
                        <button
                           onClick={() => {
                              follow(u.id);
                           }}
                        >
                           Follow
                        </button>
                     )}
                  </div>
               </div>
               <div className={c.discriptionUser}>
                  <div className={c.fullname}>{u.name}</div>
                  <div className={c.status}>{'Yo'}</div>
                  <div className={c.city}>{'u.address.city'}</div>
                  <div className={c.country}>{'u.address.country'}</div>
               </div>
            </div>
         ))}
      </div>
   );
};
