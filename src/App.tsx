import React from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import { Abilities, Examples, Footer, Form, Header, Intro, Reviews, Story } from "./components";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <div className="blocks">
                <Intro />
                <Story />
                <Abilities />
                <Examples />
                <Reviews />
                <Form />
                <Footer />
            </div>
        </div>
    );
};

export { App };
