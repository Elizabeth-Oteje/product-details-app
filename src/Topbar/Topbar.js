import React from "react";

import classes from './Topbar.module.css';

const Topbar = (props) => {
    return (
        <header>
            <nav className={classes.Topbar}>
             <img src="https://brutalgamer.com/wp-content/uploads/2016/04/amazonlogo.jpg" alt="Amazon logo"/>
            </nav>
        </header>
    );
}

export default Topbar;