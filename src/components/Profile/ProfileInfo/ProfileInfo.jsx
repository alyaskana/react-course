import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img className={s.head_img} src={props.profile.photos.large}></img>
      </div>
      <div className={s.description}>
        ava+description
      </div>
    </div>
  )
};

export default ProfileInfo;