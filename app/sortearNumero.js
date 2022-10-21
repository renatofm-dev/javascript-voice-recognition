const smallestNumber = 1
const higherNumber = 100
const numberSecret = generateNumber();



function generateNumber () {

    return parseInt(Math.random() * higherNumber+1);

}
  const elementHigherNumber = document.getElementById('maior-valor');
  elementHigherNumber.innerHTML = higherNumber;

  const elementSmallestNumber = document.getElementById('menor-valor');
  elementSmallestNumber.innerHTML = smallestNumber;

  console.log(numberSecret)

