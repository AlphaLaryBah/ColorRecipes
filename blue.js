// BLUE and RED
function displayColorBR() {
    let displBR = document.getElementById('displBR');
    displBR.value = 'Purple';
    displBR.style.color = 'white'
    displBR.style.backgroundColor = displBR.value
}

let clearBR = document.getElementById('clearBR').addEventListener('click', function () {
    let displBR = document.getElementById('displBR');
    displBR.style.display = 'none';
})


// BLUE and YELLOW

function displayColorBY() {
    let displBY = document.getElementById('displBY');
    displBY.value = 'Green';
    displBY.style.color = 'white'
    displBY.style.backgroundColor = displBY.value
}


// BLUE and GREEN

function displayColorBG() {
    let displBG = document.getElementById('displBG');
    displBG.value = 'Cyan';
    displBG.style.color = 'white'
    displBG.style.backgroundColor = displBG.value
}


// BLUE and BLACK

function displayColorBL() {
    let displBL = document.getElementById('displBL');
    displBL.value = 'Navy';
    displBL.style.color = 'white'
    displBL.style.backgroundColor = displBL.value
}

