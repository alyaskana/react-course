import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbar} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'>
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
              store={props.store} />
          </Route>
          <Route path='/profile'>
            <Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />
          </Route>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;