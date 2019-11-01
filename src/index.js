import React             from 'react';
import ReactDOM          from 'react-dom';
import { Provider }      from "react-redux"
import { createStore }   from "redux";

import allReducers from "./reducers";

import App from './App';

const store = createStore(allReducers);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);
