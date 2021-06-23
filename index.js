const channelInput = document.querySelector("#channel-input");
let speech = new SpeechSynthesisUtterance();

function start()
{
    const options = 
    {
        channels: [
            channelInput.value
        ]
    }
    const client = tmi.Client(options);
    client.connect();

    client.on('message', (channel, tags, message, self) => 
    {
        const displayName = tags['display-name'];
        console.log(`${displayName}: ${message}`);
        speak(`${displayName} disse ${message}`);
    });
}

function speak(text)
{
    speech.text = text;
    speechSynthesis.speak(speech);
}
