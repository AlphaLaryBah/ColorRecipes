function displayColor() {
    let colr = document.getElementById("colr");
    let displ = document.getElementById('displ');
    let box= document.getElementById("box")
    displ.value = 'purple';
    displ.style.backgroundColor = displ.value
    box.style.backgroundColor = displ.value
}