// Creo la const del container

const container = document.querySelector('.me-container');
const btnReset = document.getElementById('btn-reset');

btnReset.addEventListener('click', function(){
  reset();
})     

for(let i = 1; i <= 100; i++){
  const square = createSquare(i);
  container.append(square);
}





// FUNCTIONS//////////////

// Creo il reset


function reset() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => square.classList.remove('active'));
}

// Creo la funzione per creare il quadrato

function createSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square'; 

  sq.addEventListener('click', function(){
    this.classList.toggle('active');
  })
  return sq;
}