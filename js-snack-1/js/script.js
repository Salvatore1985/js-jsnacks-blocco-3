/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */

const tempArray = [];
let somma = 0;
while (somma < 200) {
  tempArray.push(parseInt(prompt("inserisci un numero")));
  somma += tempArray[tempArray.length - 1];

}