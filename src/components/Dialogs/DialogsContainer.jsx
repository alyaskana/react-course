import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()

          let sendMessage = () => {
            store.dispatch(addMessageActionCreator())
          }

          let onMessageChange = (content) => {
            store.dispatch(updateMessageTextActionCreator(content))
          }

          return (
            <Dialogs
              updateMessageText={onMessageChange}
              addMessage={sendMessage}
              dialogsPage={state.dialogsPage} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;