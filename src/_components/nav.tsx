import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            NAV
            <Link to={'/'}>Accueil</Link>
            <Link to={'files'}>Mes fichiers</Link>
            <Link to={'/logout'}>Déconnexion</Link>
        </div>
    );
};

export default Nav;