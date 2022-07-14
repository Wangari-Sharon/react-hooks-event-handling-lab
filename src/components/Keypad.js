// Code Keypad Component Here
import React from "react";

function Keypad () {
    return (
        <input onChange={() => console.log('Entering password...')}type='password'></input>
    );
}

export default Keypad;