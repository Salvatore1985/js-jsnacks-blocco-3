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

const numberArray = [2, 5, 6, 255, 23, 22, 45, 405, 12];



for (let i = 0; i < numberArray.length; i++) {
  if (isEven(numberArray[i])) {
    console.log("il numero e pari");

    redIdElement.innerHTML += ` ${numberArray[i]} `;
  } else {
    console.log("il numero non e pari");
    greenIdElement.innerHTML += ` ${numberArray[i]} `;
  }

}
console.log(numberArray);

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

