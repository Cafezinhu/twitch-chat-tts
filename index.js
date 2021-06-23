async function start()
{
    const availableVoicesElement = document.querySelector('#available-voices');
    const voices = speechSynthesis.getVoices();
    console.log(voices);
    availableVoicesElement.textContent = voices.reduce((a, c, index) => a += `${index}: ${c.voiceURI}\n`);
}


let speech = new SpeechSynthesisUtterance();
speech.text = "olá mundo";
speechSynthesis.speak(speech);