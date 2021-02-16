import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.navbar
  }
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;