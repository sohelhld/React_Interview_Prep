import React from "react";

const ArrayAndObject = ({ arr, person }) => {
    return (
        <div>
            <div>
                {" "}
                {arr.map((item, index) => {
                    return <h3 key={index}>{item}</h3>;
                })}{" "}
            </div>
            <h2>{JSON.stringify(person)}</h2>

            <div>
                name:-{person.name} age:-{person.age}
            </div>
        </div>
    );
};

export default ArrayAndObject;
