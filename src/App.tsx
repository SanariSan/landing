import React from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import { Header, Intro } from "./components";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Intro />
            {/* <Intro /> */}
        </div>
    );
};

export { App };
