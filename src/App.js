import 'bootstrap/dist/css/bootstrap.min.css';
import NavArea from './components/NavArea/NavArea';
import HeroArea from './components/HeroArea/HeroArea';
import { Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import { useState, createContext } from 'react';
import foodData from './fakeData';
import ShowAllDish from './components/ShowAllDish/ShowAllDish';
import './App.css';
import DishDetails from './components/DishDetails/DishDetails';

export const DishContext = createContext();


function App() {

  // console.log(breakfastImgs, lunchImgs, dinnerImgs);
  const [allItems, setAllItems] = useState(foodData);
  const [currentDish, setCurrentDish] = useState([]);
  const [cart, setCart] = useState([]);

  console.log(cart);




  return (
    <DishContext.Provider value={[allItems, setAllItems, currentDish, setCurrentDish,cart, setCart]}>

      <NavArea></NavArea>
      <HeroArea></HeroArea>
      <MenuBar></MenuBar>

      <Routes>

        <Route path='/' element={<ShowAllDish currentDish={currentDish}></ShowAllDish>} />

        <Route path='/dish/:id' element={<DishDetails></DishDetails>} />

      </Routes>
    </DishContext.Provider>
  );
}

export default App;
