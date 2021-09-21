function displayColor() {
    let colrRB = document.getElementById("colrRB");
    let displRB = document.getElementById('displRB');
    let boxRB= document.getElementById("box")
    displRB.value = 'Purple';
    displRB.style.color= 'white'
    displRB.style.backgroundColor = displRB.value
    boxRB.style.backgroundColor = displRB.value
}

let clearRB = document.getElementById('clearRB').addEventListener('click', function () {
    let displRB = document.getElementById('displRB');
    displRB.style.display = 'none';
})