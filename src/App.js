import './App.css';
import Login from './Views/login';
import Menu from './Views/Menu';

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Menu/>
      <Login/>
    </div>
  );
}

export default App;
