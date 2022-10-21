const elementTry = document.getElementById('chute');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
   chute = e.results[0][0].transcript
    showTryInScreen(chute);

}

function showTryInScreen (chute) {
    elementTry.innerHTML =`
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}