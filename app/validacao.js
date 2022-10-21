function numberValidation (chute) {
    const number = +chute;
    
    
    if(tryInvalid(number)) {
        if (chute.toUpperCase() ==="GAME OVER") {
            document.body.innerHTML = `
            <h2>GAME OVER!!!!</h2>
            <h3>Clicka no botão para continuar</h3>
            <button id="newGame" class= "btn-ng">JOGAR NOVAMENTE</button>
            `
            document.body.style.backgroundColor = "black";
        } else{
        elementTry.innerHTML += '<div>valor não válido </div>'
        return
        }
    }
    if(tryOutOfReach (number)){
        elementTry.innerHTML += `<div> Valor inválido: o número 
        secreto precisa estar entre ${higherNumber} e ${smallestNumber} </div>`
        return
    }

    if(number === numberSecret) {
        document.body.innerHTML = `
            <h2>Você ACERTOOOU!!!!</h2>
            <h3>O número secreto era ${numberSecret}</h3>

            <button id="newGame" class= "btn-ng">JOGAR NOVAMENTE</button>
        `
    } else if (number > numberSecret) {
        elementTry.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>
        `
    } else {
        elementTry.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>
        `

    }
}

function tryInvalid (number) {
   return Number.isNaN(number)
}

function tryOutOfReach (number) {
    return number > higherNumber || number < smallestNumber
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'newGame') {
        window.location.reload()
    }
})
