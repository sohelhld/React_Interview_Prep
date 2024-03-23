import { useState } from "react";

import "./App.css";
import NumAndStr from "./assets/comonent/NumAndStr";
import DestuctureProps from "./assets/comonent/DestuctureProps";
import ArrayAndObject from "./assets/comonent/ArrayAndObject";
import ComponentProps from "./assets/comonent/ComponentProps";
import Button from "./assets/comonent/Button";
import FuntionProps from "./assets/comonent/FuntionProps";

function App() {
    let arr = [1, 2, 3, 4, 5];
    let person = {
        name: "John",
        age: 22,
    };

    const customFunction = () => {
        console.log("custom Function Clicked");
    };

    return (
        <>
            <NumAndStr name={"Rocky"} age={25} />
            <DestuctureProps School={"abcd"} _Class={10} />
            <ArrayAndObject arr={arr} person={person} />
            <ComponentProps button={<Button />} />
            <FuntionProps custom={customFunction} />
            <FuntionProps />
        </>
    );
}

export default App;
