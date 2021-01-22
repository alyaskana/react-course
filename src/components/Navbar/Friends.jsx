import s from "./Navbar.module.css";

const Friends = (props) => {
  let friendsElements = props.friends.map(f => (
    <div className={s.friend}>
      <div className={s.friend_avatar}>
        <img src={f.avatar} alt="" />
      </div>
      <div className={s.friend_name}>{f.name}</div>
    </div>
  ))

  return (
    <div className={s.friends_items}>
      { friendsElements}
    </div>
  )
}

export default Friends