import React, {useState} from 'react';
import './App.css';
import Login from './Views/login';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Bienvenido from './Views/bienvenido';

function App() {

  const [showLogin,setShowLogin] = useState(false);//useState es un HOOK DE REACT
  
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {/* ENVIAMOS CONSTANTE Y FUNCION PARA CAMBIAR EL VALOR POR PROPS*/}
      <Menu setShowLogin={setShowLogin} showLogin={showLogin}/>
      {showLogin && <Login/>}
      <Bienvenido nombre={"Marcos"}/>
      <Footer/>
    </div>
  );
}

export default App;
