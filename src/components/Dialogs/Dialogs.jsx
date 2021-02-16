import s from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(elem => (
    <Dialog name={elem.name} id={elem.id} />
  ))

  let messagesElements = props.dialogsPage.messages.map(elem => (
    <Message content={elem.content} />
  ))

  let onSendMessageClick = () => {
    props.addMessage()
  }

  let onMessageChange = (event) => {
    let content = event.target.value
    props.updateMessageText(content)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          value={props.dialogsPage.newMessageBody}
          onChange={onMessageChange} />
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;