import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.head_img} src='https://images.unsplash.com/photo-1610720711885-fb6b908c155c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80'></img>
      </div>
      <div className={s.description}>
        ava+description
      </div>
    </div>
  )
};

export default ProfileInfo;