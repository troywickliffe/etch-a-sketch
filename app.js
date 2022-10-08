let color = 'black';

//Event listener so html and css load first then JavaScript DOM starts
document.addEventListener('DOMContentLoaded', function() {
    createGrid(16);

    let btnPop = document.querySelector('#pop')
    btnPop.addEventListener('click', function() {
        let size = getSize()
        createGrid(size);
    })
    console.log('hi')
})

//Function to create grid size
function createGrid(size) {
    let container = document.querySelector('.container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv)
        container.insertAdjacentElement('beforeend', div);
    }
}

//Function to prompt user for input
function getSize() {
    let input = prompt('Enter a number to create board size');
    let message = document.querySelector('#message');
    if (input == '') {
        message.textContent = "Please provide a Number";
    }
    else if (input < 0 || input > 100) {
        message.textContent = "Provide a number between 1 and 100"
    }
    else {
        message.textContent = "Time to Sketch!"
        return input;
    }
}

function colorDiv(){
    if(color == 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}