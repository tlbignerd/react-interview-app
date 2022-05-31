import React from 'react'

/**
 * Concatenate an array into a string using different methods.
 * @param {number} arrayType is the type of array iteration to take place. 
 * @returns String concatenating the array into values with a space in between
 */
function printArrays(arrayType) {
    const arr = ["A", "B", "C"];

    let returnVal = "";

    switch (arrayType) {
        case 1:
            for (var i = 0; i < arr.length; i++)
                returnVal += `${arr[i]} `;
            break;
        case 2:
            for (const item in arr)
                returnVal += `${item} `
            break;
        case 3:
            for (const item of arr)
                returnVal += `${item} `
            break;
        case 4:
            arr.forEach(item => {
                returnVal += `${item} `
            });
            break;
        default:
            returnVal = arr.join(" ");
            break;
    }

    return returnVal;
}

export default () => {
    return (
        <div>
            <p>1: {printArrays(1)}</p>
            <p>2: {printArrays(2)}</p>
            <p>3: {printArrays(3)}</p>
            <p>4: {printArrays(4)}</p>
            <p>5: {printArrays(5)}</p>
        </div>
    )
}