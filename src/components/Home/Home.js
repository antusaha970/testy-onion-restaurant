import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import MenuBar from '../MenuBar/MenuBar';
import NavArea from '../NavArea/NavArea';

const Home = () => {
    return (
        <>
            <NavArea></NavArea>
            <HeroArea></HeroArea>
            <MenuBar></MenuBar>
        </>
    );
};

export default Home;