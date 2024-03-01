// Creo la const del container e del button reset

const container = document.querySelector('.me-container');
const btnReset = document.getElementById('btn-reset');

// Aggiungo al bottone l'evento del reset

btnReset.addEventListener('click', function(){
  reset();
})    

// Inserisco i quadrati nel container attraverso la function

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
    // Aggiungiamo la classe active a ciò che clicchiamo e vediamo tramite la console a che numero corrisponde
    
    this.classList.add('active');
    console.log(numero);
  })
  return sq;
}