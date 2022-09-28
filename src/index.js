import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App"
import { StateProvider } from "./context/StateProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";
import { MantineProvider } from "@mantine/core";

ReactDOM.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <App />
            </MantineProvider>
        </StateProvider>

    </Router>,
    document.getElementById('root'));