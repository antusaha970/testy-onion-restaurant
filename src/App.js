import 'bootstrap/dist/css/bootstrap.min.css';
import NavArea from './components/NavArea/NavArea';
import './App.css';
import HeroArea from './components/HeroArea/HeroArea';
import { Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">

      <NavArea></NavArea>
      <HeroArea></HeroArea>
      <MenuBar></MenuBar>

      <Routes>

      </Routes>
    </div>
  );
}

export default App;
