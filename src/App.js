import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>Feed</a>
      <a>Messages</a>
    </div>
  )
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  )
}

export default App;
