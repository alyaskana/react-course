import s from "./Dialogs.module.css";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
  let dialogsPage = props.store.getState().dialogsPage

  let dialogsElements = dialogsPage.dialogs.map(elem => (
    <Dialog name={elem.name} id={elem.id} />
  ))

  let messagesElements = dialogsPage.messages.map(elem => (
    <Message content={elem.content} />
  ))

  let sendMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = (event) => {
    let content = event.target.value
    props.dispatch(updateMessageTextActionCreator(content))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          value={dialogsPage.newMessageBody}
          onChange={onMessageChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs;