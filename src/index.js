import React from "react";
import ReactDOM from "react-dom";
import Main from "./component/Main.jsx";
import { Provider } from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
             <Main />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);