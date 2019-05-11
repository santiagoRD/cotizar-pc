import React from 'react';
import '../css/header.css'

const Header = (props) => {
    return(
        <h1 className="app__Header-title">{props.titulo}</h1>
    )
}

export default Header;