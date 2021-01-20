import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.text}
    </div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <Dialog name='Alex' id='1' />
        <Dialog name='Max' id='2' />
        <Dialog name='Tony' id='3' />
      </div>
      <div className={s.messages}>
        <Message text='Hi!' />
        <Message text='Hello!' />
        <Message text='Yo!' />
      </div>
    </div>
  )
}

export default Dialogs;