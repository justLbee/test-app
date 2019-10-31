import React from "react";
import { Route }  from "react-router-dom";

import MainLayout from "./layouts/mainLayout"
import LoginPage from "./views/login"

import './App.scss';


function App() {
    return (
        <MainLayout>
            <Route path="/login" component={LoginPage}/>
        </MainLayout>
    );
}

export default App;
