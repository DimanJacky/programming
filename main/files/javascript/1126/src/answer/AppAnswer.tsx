import React from 'react';

export const AppAnswer = () => {
    const per = "prop2";

    const obj = {
        prop1: 1,
        "likes birds": 1,
        [per]: 1
    }
    console.log(obj);
    console.log("prop1" in obj);

    return (
        <div>

        </div>
    );
};