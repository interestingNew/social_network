import { MyPosts } from "./MyPosts";
import {
   AddNewPostAC,
   UpdateNewPostTextAC,
} from "../../../redux/profile-reducer";
import { connect, useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../redux/state-redux";
import { AppDispatch, ProfilePageType } from "../../../redux/types";


const mapStateToProps = (state: StateType) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
   return {
      addPost: () => {
         dispatch(AddNewPostAC());
      },
      updateNewPostText: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdateNewPostTextAC(e.currentTarget.value));
      }
   }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

// export const MyPostsContainer = () => {      // при помощи хуков


//    const profilePage = useSelector<StateType, ProfilePageType>(
//       (state) => state.profilePage
//    );
//    const dispatch = useDispatch();


//    const addPost = () => {
//       dispatch(AddNewPostAC());
//    };
//    const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//       dispatch(UpdateNewPostTextAC(e.currentTarget.value.trim()));
//    };

//    return (
//       <div>
//          <MyPosts
//             posts={profilePage.posts}
//             newPostText={profilePage.newPostText}
//             addPost={addPost}
//             updateNewPostText={onPostChange}
//          />
//       </div>
//    );
// };