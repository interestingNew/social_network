import { UsersType } from "../../redux/types";
import c from "./Users.module.css";
import userPhoto from "../../images/userPhoto.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";

type UsersTypeProps = {
   users: UsersType;
   pageSize: number;
   totalUsersCount: number;
   currentPage: number;
   follow: (id: number) => void;
   unfollow: (id: number) => void;
   onPageChanged: (pageNumber: number) => void;
   isFollowingProgress: number[];
   toggleFollowingProgress: (isFetching: boolean, userId: number) => void;
};

export const Usersss = ({
   users,
   pageSize,
   totalUsersCount,
   currentPage,
   follow,
   unfollow,
   onPageChanged,
   isFollowingProgress,
   toggleFollowingProgress
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
                              toggleFollowingProgress(true, u.id)
                              usersAPI.unfollowUser(u.id)
                                 .then((response) => {
                                    if(response.data.resultCode == 0) {
                                       unfollow(u.id);
                                    }
                                    toggleFollowingProgress(false, u.id)
                                 });
                           }}
                        >
                           Unfollow
                        </button>
                     ) : (
                        <button disabled={isFollowingProgress.some(id => id === u.id)}
                           onClick={() => {
                              toggleFollowingProgress(true, u.id)
                              usersAPI.followUser(u.id)
                                 .then((response) => {
                                    if(response.data.resultCode == 0) {
                                       follow(u.id);
                                    }
                                    toggleFollowingProgress(false, u.id)
                                 });
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
