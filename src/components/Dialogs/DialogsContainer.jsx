import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState()

  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator())
  }

  let onMessageChange = (content) => {
    props.store.dispatch(updateMessageTextActionCreator(content))
  }

  return (
    <Dialogs
      updateMessageText={onMessageChange}
      addMessage={sendMessage}
      dialogsPage={state.dialogsPage} />
  )
}

export default DialogsContainer;