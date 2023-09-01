import React from 'react';
import {Link} from "react-router-dom";
import {faFolder, faHome, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Nav = () => {


    return (
        <div
            className="bg-gray-800 flex flex-col w-[90px] h-screen shadow shadow-gray-800 text-gray-300 justify-center gap-10">
            <Link to={'/'} className="text-xs font-semibold flex flex-col items-center gap-2 group">
                <span className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-300">
                    <FontAwesomeIcon icon={faHome} className="text-xl group-hover:text-gray-900"/>
                </span>
                Accueil
            </Link>
            <Link to={'files'} className="text-xs font-semibold flex flex-col items-center gap-2 group">
                 <span className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-300">
                    <FontAwesomeIcon icon={faFolder} className="text-xl group-hover:text-gray-900"/>
                </span>
                Mes fichiers
            </Link>
            <Link to={'/logout'} className="text-xs font-semibold flex flex-col items-center gap-2 group">
                 <span className="bg-gray-900 p-3 rounded-full group-hover:bg-gray-300">
                    <FontAwesomeIcon icon={faRightFromBracket} className="text-xl group-hover:text-gray-900"/>
                 </span>
                Déconnexion
            </Link>

        </div>
    );
};

export default Nav;