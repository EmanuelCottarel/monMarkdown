import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";

const FileCard = () => {
    return (
        <div className="border border-gray-500 rounded-2xl">
            <div className="flex justify-center items-center p-4">
                <FontAwesomeIcon icon={faFile} className="text-9xl text-gray-500"/>

            </div>
            <div>
                Nom du fichier
            </div>

        </div>
    );
};

export default FileCard;