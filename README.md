js-campominato-grid
===
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
### Svolgimento:
1. Salvo il container in una const
2. Creo il reset
3. Creo un ciclo con for di 100 ripetizioni e per ogni ciclo verrà creato un quadrato (<div.square>) tramite una function e aggiunto alla griglia.
4. Nella funzione di creazione del quadrato aggiungo un eventListener per cambiare il colore del quadrato cliccandoci sopra.