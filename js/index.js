'use strict';

const inputScreen = document.querySelector('#input'),
    numberButtons = document.querySelectorAll('.number'),
    operButtons = document.querySelectorAll('.operator'),
    result = document.querySelector('#result'),
    clear = document.querySelector('#clear');

let resultDisplayed = false; 

// create empty array for input
let numberOperatorsArray = [];

// number buttons event listener
numberButtons.forEach(function(number) {
    number.addEventListener('click', function() {
        inputScreen.innerText += this.innerHTML;
        numberOperatorsArray = [...numberOperatorsArray, this.innerHTML];
    });
});

// operator buttons event listener
operButtons.forEach(function(operator) {
    operator.addEventListener('click', function() {
        inputScreen.innerText += this.innerHTML;
        numberOperatorsArray = [...numberOperatorsArray, this.innerHTML];
    });
}); 

// on click of 'equal' button
result.addEventListener('click', function() {
    let numbersStringHolder = "";
    let resultArray = [];
    for (let char of numberOperatorsArray) {
        const numReg = /\d/;
        if (numReg.test(char) || char === '.') {
            numbersStringHolder += char;
        } else {
            resultArray = [...resultArray, Number(numbersStringHolder), char];
            numbersStringHolder = "";
        }
    }
    resultArray = [...resultArray, Number(numbersStringHolder)];
    
    let multiply = resultArray.indexOf("*");
    while (multiply !== -1) {
        resultArray.splice(multiply-1, 3, resultArray[multiply-1] * resultArray[multiply+1]);
        multiply = resultArray.indexOf("*");
    }

    let divide = resultArray.indexOf("/");
    while (divide !== -1) {
        resultArray.splice(divide-1, 3, resultArray[divide-1] / resultArray[divide+1]);
        divide = resultArray.indexOf("/");
    }

    let add = resultArray.indexOf("+");
    while (add !== -1) {
        resultArray.splice(add-1, 3, resultArray[add-1] + resultArray[add+1]);
        add = resultArray.indexOf("+");
    }

    let subtract = resultArray.indexOf("-");
    while (subtract !== -1) {
        resultArray.splice(subtract-1, 3, resultArray[subtract-1] - resultArray[subtract+1]);
        subtract = resultArray.indexOf("-");
    }


    console.log("result array: ", resultArray);
    numberOperatorsArray = [...resultArray];
    inputScreen.innerHTML = numberOperatorsArray;


});

// clearing the input on press of clear
clear.addEventListener('click', function() {
    inputScreen.innerHTML = "";
    numberOperatorsArray = [];
});









//         let currentValues = inputScreen.innerText;
//         let lastCharacter = currentValues[currentValues.length - 1];

//         if (lastCharacter === '+' || lastCharacter === '-' || lastCharacter === '*' || lastCharacter === '/') {
//             const newString = currentValues.substring(0, currentValues.length - 1) + element.innerHTML;
//          inputScreen.innerText = newString;
//         } else if (currentValues.length === 0) {
//             alert("TYPE A NUMBER");
//         } else {
//          inputScreen.innerText += element.innerHTML;
//         }
//     });
// });