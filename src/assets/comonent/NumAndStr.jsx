import React from "react";

const NumAndStr = (props) => {
    console.log(props);
    return (
        <div>
            <button>
                {" "}
                Name:-{props.name} Age:-{props.age}{" "}
            </button>
        </div>
    );
};

export default NumAndStr;
