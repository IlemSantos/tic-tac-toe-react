import React from "react";

const style = {
    fontSize: '30px'
};

const Square = ({ value, onClick }) => (
    <button className="square" onClick={onClick} style={style}>
        {value}
    </button>
);

export default Square;