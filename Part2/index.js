
//stores #cardId and #colorId to matching variables for easy ref
const inputId = document.getElementById('cardId')
const inputColor = document.getElementById('colorId')

//function that takes in user input value to set cards
function setCard(){
    //sets user input value(one of suits) to card variable
    const card = document.getElementById(inputId.value)
    //card variable above is used to set user input value (a color) to the typed in color
    card.style.color = inputColor.value
} 