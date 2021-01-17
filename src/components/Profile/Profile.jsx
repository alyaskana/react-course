import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={s.head_img} src='https://images.unsplash.com/photo-1610720711885-fb6b908c155c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80'></img>
      </div>
      <div>
        ava+description
      </div>
      <MyPosts />
    </div >
  )
};

export default Profile;