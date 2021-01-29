import s from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(elem => (
    <Dialog name={elem.name} id={elem.id} />
  ))

  let messagesElements = props.dialogsPage.messages.map(elem => (
    <Message text={elem.text} />
  ))

  let newMessageElement = React.createRef()

  let sendMessage = () => {
    props.addMessage()
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.updateMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          ref={newMessageElement}
          value={props.dialogsPage.newMessageText}
          onChange={onMessageChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;