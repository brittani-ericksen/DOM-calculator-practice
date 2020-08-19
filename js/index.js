'use strict';

const inputScreen = document.getElementById('input');
const inputArray = [];

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        inputArray.push(element.innerHTML);
        inputScreen.innerText += element.innerHTML;
    })
})

const operButtons = document.querySelectorAll('.operator');
const inputArrayOperator = [];
operButtons.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        let currentValues = inputScreen.innerText;
        let lastCharacter = currentValues[currentValues.length - 1];

        if (lastCharacter === '+' || lastCharacter === '-' || lastCharacter === '*' || lastCharacter === '/') {
            const newString = currentValues.substring(0, currentValues.length - 1) + element.innerHTML;
            inputScreen.innerText = newString;
        } else if (currentValues.length === 0) {
            alert("TYPE A NUMBER");
        } else {
            inputScreen.innerText += element.innerHTML;
        }
    })
})