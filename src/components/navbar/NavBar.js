import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import './NavBar.css';
import Logo from '../images/Logo4.jpeg';



const NavBar = () =>
{


    return(
        
        <AppBar className="AppBar" color="transparent" style={{position: "relative"}}>
            <div>
                <img src={Logo} alt="Logo" width="200px"/>
                <Typography className="Typography" variant="h1" style={{color: "#204F92", fontFamily:'Lemon', textAlign: 'left', float:'right', paddingTop:'15px', paddingRight:'25px'}}>
                    Immagine
                </Typography>
            </div>
        </AppBar>

    );
}

export default NavBar;