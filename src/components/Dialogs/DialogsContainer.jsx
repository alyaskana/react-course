import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (content) => {
      dispatch(updateMessageTextActionCreator(content))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;