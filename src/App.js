import 'bootstrap/dist/css/bootstrap.min.css';
import NavArea from './components/NavArea/NavArea';
import './App.css';
import HeroArea from './components/HeroArea/HeroArea';
import { Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar/MenuBar';
import { useState,createContext } from 'react';
import foodData from './fakeData';

export const DishContext = createContext();


function App() {
  
  // console.log(breakfastImgs, lunchImgs, dinnerImgs);
  const [allItems, setAllItems] = useState(foodData);

  console.log(allItems);




  return (
    <DishContext.Provider value={[allItems,setAllItems]}>

      <NavArea></NavArea>
      <HeroArea></HeroArea>
      <MenuBar></MenuBar>

      <Routes>

      </Routes>
    </DishContext.Provider>
  );
}

export default App;
