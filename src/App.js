import React from "react";

import MainLayout from "./layouts/mainLayout"
import SubmitForm from "./components/SubmitForm";

import './App.scss';


function App() {
    return (
        <MainLayout>
            <SubmitForm />
        </MainLayout>
    );
}

export default App;
