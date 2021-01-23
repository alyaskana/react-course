import s from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(elem => (
    <Dialog name={elem.name} id={elem.id} />
  ))

  let messagesElements = props.state.messages.map(elem => (
    <Message text={elem.text} />
  ))

  let newMessageElement = React.createRef()

  let sendMessage = () => {
    let text = newMessageElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;