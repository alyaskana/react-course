import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()
          return < Navbar state={state.navbar} />
        }
      }
    </StoreContext.Consumer>
  )
};

export default NavbarContainer;