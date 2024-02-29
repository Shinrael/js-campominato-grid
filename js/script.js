// Creo la const del container

const container = document.querySelector('.me-container');

reset();

for(let i = 1; i <= 100; i++){
  const square = createSquare();
  container.append(square);
}





// FUNCTIONS//////////////

// Creo il reset


function reset() {
  container.innerHTML = '';
}

// Creo la funzione per creare il quadrato

function createSquare(){
  const sq = document.createElement('div');
  sq.className = 'square';
  return sq;
}