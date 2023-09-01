import React from 'react';
import FileCard from "./file-card";

const Dashboard = () => {
    return (
        <div className="text-gray-300 p-8 w-full">
            <h1 className="text-2xl">Bienvenue user</h1>

            <button className="border border-gray-300 px-4 py-2 hover:bg-gray-300 hover:text-gray-900">Créer un
                fichier
            </button>
            <h1 className="text-2xl">Mes fichiers récents</h1>
            <div className="flex gap-3 w-full">
                <FileCard/>
                <FileCard/>
                <FileCard/>
            </div>

        </div>
    );
};

export default Dashboard;