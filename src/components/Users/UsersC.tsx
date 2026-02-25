import { UsersPageType, UsersType } from "../../redux/types";
import c from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../images/userPhoto.jpg";
import React from "react";

type UsersTypeProps = {
   users: UsersType;
   follow: (id: number) => void;
   unfollow: (id: number) => void;
   setUsers: (users: UsersType) => void;
};

class UsersC extends React.Component<UsersTypeProps> {
   componentDidMount(): void {
      axios
         .get("https://social-network.samuraijs.com/api/1.0/users")
         .then((response) => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {
      return (
         <div>
            {this.props.users.map((u) => (
               <div className={c.user} key={u.id}>
                  <div>
                     <div>
                        <img className={c.avatar} src={userPhoto} />
                     </div>
                     <div>
                        {u.followed ? (
                           <button
                              onClick={() => {
                                 this.props.unfollow(u.id);
                              }}
                           >
                              Unfollow
                           </button>
                        ) : (
                           <button
                              onClick={() => {
                                 this.props.follow(u.id);
                              }}
                           >
                              Follow
                           </button>
                        )}
                     </div>
                  </div>
                  <div className={c.discriptionUser}>
                     <div className={c.fullname}>{u.name}</div>
                     <div className={c.status}>{"Yo"}</div>
                     <div className={c.city}>{"u.address.city"}</div>
                     <div className={c.country}>{"u.address.country"}</div>
                  </div>
               </div>
            ))}
         </div>
      );
   }
}

export default UsersC;
