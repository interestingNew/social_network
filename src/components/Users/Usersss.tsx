import { UsersType } from "../../redux/types";
import c from "./Users.module.css";
import userPhoto from "../../images/userPhoto.jpg";
import { NavLink } from "react-router-dom";

type UsersTypeProps = {
   users: UsersType;
   pageSize: number;
   totalUsersCount: number;
   currentPage: number;
   follow: (id: number) => void;
   unfollow: (id: number) => void;
   onPageChanged: (pageNumber: number) => void;
   isFollowingProgress: number[];
};

export const Usersss = ({
   users,
   pageSize,
   totalUsersCount,
   currentPage,
   follow,
   unfollow,
   onPageChanged,
   isFollowingProgress
}: UsersTypeProps) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div>
         <div>
            {pages.map((p) => (
               <span
                  key={p}
                  onClick={() => onPageChanged(p)}
                  className={currentPage === p ? c.selectedPage : ""}
               >
                  {p}
               </span>
            ))}
         </div>
         {users.map((u) => (
            <div className={c.user} key={u.id}>
               <div>
                  <div>
                     <NavLink to={"/profile/" + u.id}>
                        <img
                           className={c.avatar}
                           src={
                              u.photos.small !== null
                                 ? u.photos.small
                                 : userPhoto
                           }
                        />
                     </NavLink>
                  </div>
                  <div>
                     {u.followed ? (
                        <button disabled={isFollowingProgress.some(id => id === u.id)}
                           onClick={() => {
                              unfollow(u.id)
                           }}
                        >
                           Unfollow
                        </button>
                     ) : (
                        <button disabled={isFollowingProgress.some(id => id === u.id)}
                           onClick={() => {
                              follow(u.id)
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
};
