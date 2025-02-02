import React from 'react';
import Menu from '../../Components/Menu/Menu';
import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';


const bienvenido = ({nombre}) => {
    return (
        <div>
            <Menu/>
            <Body/>
            <Footer/> 
        </div>
    );
};

export default bienvenido;
