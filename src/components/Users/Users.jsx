import * as axios from "axios";
import s from "./Users.module.css";
import default_avatar_small from '../../assets/images/default_avatar_small.png'

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items)
    })
  }

  return (
    <div className={s.page_wrapper}>
      {
        props.users.map(u => (
          <div key={u.id} className={s.user_wrapper}>
            <div className={s.user_actions}>
              <div className={s.avatar_wrapper}>
                <img src={u.photos.small != null ? u.photos.small : default_avatar_small} className={s.avatar} />
              </div>
              <div className={s.btn_wrapper}>
                <button className={s.btn} onClick={() => { props.toggleFollow(u.id) }}>{u.isFollowed ? 'Unfollow' : 'Follow'}</button>
              </div>
            </div>
            <div className={s.user_bio}>
              <div className={s.bio}>
                <div className={s.username}>{u.name}</div>
                <div className={s.location}>
                  <div>{'u.location.city'}</div>
                  <div>{'u.location.country'}</div>
                </div>
              </div>
              <div className={s.status}>{u.status}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Users;