import React from 'react';



const Footer = () => {
    return (
        <div style={{border: "1px solid black", width: "100%"}}>
            Muscula en GYM Master
            <div className='footer'>
            <div className='sb__footer__section__pedding'>
                <div className='sb__footer-links'>
                <div className='sb__footer-links-div'>
                    <h4>Muscula AllDay</h4> 
                    <a href='/healthplan'>
                        <p>Health Plan</p>
                    </a>
                    <a href='/individual'>
                        <p>Individual</p>
                    </a>
                </div>
                </div>
            </div>
            </div>    
        </div>
    );
};

export default Footer;
