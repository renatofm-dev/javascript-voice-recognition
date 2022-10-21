const numberSecret = generateNumber();

function generateNumber () {
    return parseInt(Math.random()*100);
}
document.write(numberSecret)

