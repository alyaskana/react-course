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
  let dialogs = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Max' },
    { id: 3, name: 'Tony' },
  ]

  let messages = [
    { text: 'Hi!' },
    { text: 'Hello!' },
    { text: 'Yo!' },
  ]

  let dialogsElements = dialogs.map(elem => (
    <Dialog name={elem.name} id={elem.id} />
  ))

  let messagesElements = messages.map(elem => (
    <Message text={elem.text} />
  ))

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;