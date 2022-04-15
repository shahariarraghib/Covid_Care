import React from 'react';
import ToGetData from '../../Hooks/ToGetData';
import Middlepart from '../MiddlePart/Middlepart';


import Slide from '../Slide/Slide';

const Home = () => {
    return (
        <div id='home'>
            
             <Slide></Slide>
             <Middlepart></Middlepart>
            <ToGetData></ToGetData>
            
        </div>
    );
};

export default Home;