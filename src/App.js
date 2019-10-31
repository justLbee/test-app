import React from "react";
import { Route }  from "react-router-dom";

import MainLayout from "./layouts/mainLayout"

import './App.scss';


function App() {
    return (
        <MainLayout>
            <Route path="/" />
        </MainLayout>
    );
}

export default App;
