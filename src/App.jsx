import { useState } from "react";

import "./App.css";
import NumAndStr from "./assets/comonent/NumAndStr";
import DestuctureProps from "./assets/comonent/DestuctureProps";
import ArrayAndObject from "./assets/comonent/ArrayAndObject";

function App() {
    let arr = [1, 2, 3, 4, 5];
    let person = {
        name: "John",
        age: 22,
    };
    return (
        <>
            <NumAndStr name={"Rocky"} age={25} />
            <DestuctureProps School={"abcd"} _Class={10} />
            <ArrayAndObject arr={arr} person={person} />
        </>
    );
}

export default App;
