function affirm(){
    let nameInput =  document.getElementById('name');
    let name = nameInput.value;
    let affirmation = name + ", be my valentine";
    let affirmationDisplay = document.getElementById('affirmation-display');
    affirmationDisplay.innerHTML= affirmation;
}