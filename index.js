// RED and BLUE
function displayColorRB() {
  let displRB = document.getElementById('displRB');
  displRB.value = 'Purple';
  displRB.style.color = 'white'
  displRB.style.backgroundColor = displRB.value
}

let clearRB = document.getElementById('clearRB').addEventListener('click', function() {
  let displRB = document.getElementById('displRB');
  displRB.style.display = 'none';
})


// RED and GREEN

function displayColorRG() {
  let displRG = document.getElementById('displRG');
  displRG.value = 'Brown';
  displRG.style.color = 'white'
  displRG.style.backgroundColor = displRG.value
}


// RED and YELLOW

function displayColorRY() {
  let displRY = document.getElementById('displRY');
  displRY.value = 'Orange';
  displRY.style.color = 'white'
  displRY.style.backgroundColor = displRY.value
}


// RED and WHITE

function displayColorRW() {
  let displRW = document.getElementById('displRW');
  displRW.value = 'Pink';
  displRW.style.color = 'white'
  displRW.style.backgroundColor = displRW.value
}
