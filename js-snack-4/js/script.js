/**
 *
 *
   Crea due tag div con due id diversi:
   un div avrà il testo colorato di rosso mentre l'altro di verde.
   Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
   Se sono pari li stampo nell'div "rosso",
   se sono dispari li stampo nell'div "verde".
 *
 */

const redIdElement = document.getElementById("my-red");
const greenIdElement = document.getElementById("my-green");

function sumNumber(num1, num2) {
  let sum = num1 + num2;

  if (sum % 2 === 0) {
    return true;
  } else {
    return false
  }
}

let mySum = sumNumber(0, 5);
console.log(mySum);

if (mySum) {
  redIdElement.innerHTML += `il numero e pari`;
} else {
  greenIdElement.innerHTML += `il numero e dispari`;
}


/**
 * Funzione Pari o DIspari
 * @param {number} number il numero e pari
 * @returns il numero e dispari
 */
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false
}

